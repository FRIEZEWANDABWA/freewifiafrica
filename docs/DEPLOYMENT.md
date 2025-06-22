# Deployment Guide

This guide covers deploying the Connected Access Hubs platform to AWS using serverless architecture.

## Prerequisites

- AWS CLI configured with appropriate permissions
- Node.js 18+ installed
- AWS Amplify CLI installed globally
- Serverless Framework installed globally

## Environment Setup

### 1. AWS Configuration

```bash
# Configure AWS CLI
aws configure

# Create SSM parameters for secrets
aws ssm put-parameter --name "/connected-access-hubs/dev/jwt-secret" --value "your-jwt-secret" --type "SecureString"
aws ssm put-parameter --name "/connected-access-hubs/prod/jwt-secret" --value "your-prod-jwt-secret" --type "SecureString"
```

### 2. Backend Deployment

```bash
cd backend

# Install dependencies
npm install

# Deploy to development
npm run deploy

# Deploy to production
npm run deploy -- --stage prod
```

### 3. Frontend Deployment

#### Option A: AWS Amplify Console (Recommended)

1. Connect your repository to AWS Amplify Console
2. Configure build settings using the provided `amplify.yml`
3. Set environment variables in Amplify Console
4. Deploy automatically on git push

#### Option B: Manual Amplify CLI

```bash
cd frontend

# Install dependencies
npm install

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

## Environment Variables

### Backend Environment Variables

Set these in your serverless.yml or AWS Systems Manager Parameter Store:

- `JWT_SECRET`: Secret key for JWT token signing
- `STAGE`: Deployment stage (dev, staging, prod)

### Frontend Environment Variables

Create `.env` files for different environments:

```bash
# .env.development
REACT_APP_API_URL=https://your-dev-api.execute-api.us-east-1.amazonaws.com/dev
REACT_APP_STAGE=development

# .env.production
REACT_APP_API_URL=https://your-prod-api.execute-api.us-east-1.amazonaws.com/prod
REACT_APP_STAGE=production
```

## Database Setup

The DynamoDB tables are created automatically via CloudFormation when deploying the backend. Initial data can be seeded using the provided scripts:

```bash
cd backend
npm run seed-data
```

## Monitoring and Logging

### CloudWatch Setup

- Lambda function logs are automatically sent to CloudWatch
- Set up CloudWatch alarms for error rates and performance metrics
- Configure log retention policies

### AWS X-Ray (Optional)

Enable X-Ray tracing for detailed performance monitoring:

```yaml
# Add to serverless.yml
provider:
  tracing:
    lambda: true
    apiGateway: true
```

## Security Configuration

### API Gateway

- CORS is configured for cross-origin requests
- JWT authorization is implemented for protected endpoints
- Rate limiting can be configured per endpoint

### DynamoDB

- Tables use on-demand billing mode
- Point-in-time recovery should be enabled for production
- Encryption at rest is enabled by default

### S3

- Public read access for static assets
- CORS configuration for file uploads
- Lifecycle policies for cost optimization

## Performance Optimization

### Lambda Functions

- Use provisioned concurrency for frequently accessed functions
- Optimize memory allocation based on usage patterns
- Implement connection pooling for database connections

### Frontend

- Enable CloudFront distribution for global CDN
- Implement service worker for offline functionality
- Use code splitting and lazy loading

## Backup and Recovery

### Database Backups

```bash
# Enable point-in-time recovery
aws dynamodb put-backup-policy --table-name connected-access-hubs-prod-hubs --backup-policy-enabled
```

### S3 Backups

- Configure cross-region replication for critical assets
- Set up lifecycle policies for archival

## Scaling Considerations

### Auto Scaling

- DynamoDB tables use on-demand scaling
- Lambda functions scale automatically
- Consider API Gateway throttling limits

### Cost Optimization

- Monitor AWS costs using Cost Explorer
- Set up billing alerts
- Use reserved capacity for predictable workloads

## Troubleshooting

### Common Issues

1. **CORS Errors**: Verify CORS configuration in API Gateway
2. **Authentication Failures**: Check JWT secret configuration
3. **Database Connection Issues**: Verify IAM permissions
4. **Build Failures**: Check Node.js version compatibility

### Debugging

```bash
# View Lambda logs
aws logs tail /aws/lambda/connected-access-hubs-dev-getHubs --follow

# Test API endpoints
curl -X GET https://your-api-url/dev/api/hubs
```

## Production Checklist

- [ ] Environment variables configured
- [ ] SSL certificates installed
- [ ] Custom domain configured
- [ ] Monitoring and alerting set up
- [ ] Backup policies enabled
- [ ] Security review completed
- [ ] Performance testing completed
- [ ] Documentation updated

## Support

For deployment issues, check:
1. AWS CloudFormation stack events
2. Lambda function logs in CloudWatch
3. API Gateway execution logs
4. Amplify build logs

Contact the development team for additional support.