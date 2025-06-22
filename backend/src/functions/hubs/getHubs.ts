import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';
import { createResponse } from '../../shared/utils';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const { region, status, limit = '50', lastKey } = event.queryStringParameters || {};
    
    let command;
    let params: any = {
      TableName: process.env.HUBS_TABLE,
      Limit: parseInt(limit),
    };

    if (lastKey) {
      params.ExclusiveStartKey = JSON.parse(decodeURIComponent(lastKey));
    }

    if (region) {
      command = new QueryCommand({
        ...params,
        IndexName: 'RegionIndex',
        KeyConditionExpression: 'region = :region',
        ExpressionAttributeValues: {
          ':region': region,
        },
      });
    } else if (status) {
      command = new QueryCommand({
        ...params,
        IndexName: 'StatusIndex',
        KeyConditionExpression: '#status = :status',
        ExpressionAttributeNames: {
          '#status': 'status',
        },
        ExpressionAttributeValues: {
          ':status': status,
        },
      });
    } else {
      command = new ScanCommand(params);
    }

    const result = await docClient.send(command);

    const totalHubs = result.Items?.length || 0;
    const activeHubs = result.Items?.filter(hub => hub.status === 'active').length || 0;
    const totalUsers = result.Items?.reduce((sum, hub) => sum + (hub.connectivity?.totalUsers || 0), 0) || 0;
    const activeUsers = result.Items?.reduce((sum, hub) => sum + (hub.connectivity?.activeUsers || 0), 0) || 0;

    const response = {
      hubs: result.Items || [],
      summary: {
        totalHubs,
        activeHubs,
        totalUsers,
        activeUsers,
        averageUptime: activeHubs > 0 ? 
          result.Items
            ?.filter(hub => hub.status === 'active')
            .reduce((sum, hub) => sum + (hub.connectivity?.uptime || 0), 0) / activeHubs 
          : 0,
      },
      pagination: {
        hasMore: !!result.LastEvaluatedKey,
        lastKey: result.LastEvaluatedKey ? encodeURIComponent(JSON.stringify(result.LastEvaluatedKey)) : null,
      },
    };

    return createResponse(200, response);
  } catch (error) {
    console.error('Error fetching hubs:', error);
    return createResponse(500, { 
      error: 'Internal server error',
      message: 'Failed to fetch hubs'
    });
  }
};