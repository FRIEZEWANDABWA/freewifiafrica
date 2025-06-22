# API Documentation

Connected Access Hubs REST API documentation for developers and integrators.

## Base URL

- Development: `https://api-dev.connected-access-hubs.com`
- Production: `https://api.connected-access-hubs.com`

## Authentication

Protected endpoints require JWT authentication via the `Authorization` header:

```
Authorization: Bearer <jwt_token>
```

## Response Format

All API responses follow this structure:

```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 100,
    "hasMore": true
  }
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error type",
  "message": "Detailed error message"
}
```

## Endpoints

### Hubs

#### GET /api/hubs

Retrieve all digital access hubs with optional filtering.

**Query Parameters:**
- `region` (string): Filter by region
- `status` (string): Filter by status (active, inactive, maintenance)
- `limit` (number): Number of results per page (default: 50)
- `lastKey` (string): Pagination cursor

**Response:**
```json
{
  "hubs": [
    {
      "id": "hub_123",
      "name": "Kibera Community Hub",
      "location": {
        "latitude": -1.3133,
        "longitude": 36.7833,
        "address": "Kibera, Nairobi",
        "region": "Nairobi",
        "country": "Kenya"
      },
      "status": "active",
      "connectivity": {
        "bandwidth": "100 Mbps",
        "uptime": 0.98,
        "activeUsers": 245,
        "totalUsers": 1850
      },
      "services": ["Education", "Health Info", "Job Board"],
      "implementationDate": "2023-03-15T00:00:00Z",
      "partner": "Kenya ICT Authority",
      "targetAudience": ["Youth", "Women", "Small Business Owners"]
    }
  ],
  "summary": {
    "totalHubs": 127,
    "activeHubs": 118,
    "totalUsers": 45000,
    "activeUsers": 12500,
    "averageUptime": 0.96
  }
}
```

#### GET /api/hubs/{id}

Retrieve detailed information about a specific hub.

**Response:**
```json
{
  "id": "hub_123",
  "name": "Kibera Community Hub",
  "location": {
    "latitude": -1.3133,
    "longitude": 36.7833,
    "address": "Kibera, Nairobi",
    "region": "Nairobi",
    "country": "Kenya"
  },
  "status": "active",
  "connectivity": {
    "bandwidth": "100 Mbps",
    "uptime": 0.98,
    "activeUsers": 245,
    "totalUsers": 1850
  },
  "services": ["Education", "Health Info", "Job Board"],
  "implementationDate": "2023-03-15T00:00:00Z",
  "lastUpdated": "2024-01-15T10:30:00Z",
  "partner": "Kenya ICT Authority",
  "targetAudience": ["Youth", "Women", "Small Business Owners"],
  "impactMetrics": {
    "dailyUsers": 245,
    "monthlyUsers": 1850,
    "contentViews": [
      {
        "category": "education",
        "views": 1250,
        "uniqueUsers": 450,
        "avgTimeSpent": 15.5
      }
    ],
    "educationalEngagement": {
      "coursesCompleted": 89,
      "skillsAcquired": ["Digital Literacy", "Basic Computer Skills"],
      "certificationsEarned": 34
    },
    "economicImpact": {
      "jobApplications": 156,
      "businessRegistrations": 23,
      "marketAccess": 78
    }
  }
}
```

#### POST /api/hubs

Create a new hub (Admin only).

**Request Body:**
```json
{
  "name": "New Community Hub",
  "location": {
    "latitude": -1.2921,
    "longitude": 36.8219,
    "address": "Nairobi, Kenya",
    "region": "Nairobi",
    "country": "Kenya"
  },
  "connectivity": {
    "bandwidth": "50 Mbps"
  },
  "services": ["Education", "Health Info"],
  "partner": "Local NGO",
  "targetAudience": ["Students", "Women"]
}
```

### Analytics

#### GET /api/analytics

Retrieve platform-wide analytics data.

**Query Parameters:**
- `period` (string): Time period (7d, 30d, 90d, 1y)
- `region` (string): Filter by region

**Response:**
```json
{
  "totalHubs": 127,
  "activeUsers": 12500,
  "totalUsers": 45000,
  "contentViews": 2300000,
  "surveyResponses": 8900,
  "regionalData": [
    {
      "region": "Nairobi",
      "hubCount": 45,
      "userCount": 18500,
      "contentViews": 890000,
      "impactScore": 8.7
    }
  ],
  "timeSeriesData": [
    {
      "date": "2024-01-01",
      "users": 11200,
      "contentViews": 75000,
      "newHubs": 2
    }
  ],
  "userEngagement": {
    "avgSessionDuration": 18.5,
    "returnUserRate": 0.68,
    "contentCompletionRate": 0.45,
    "surveyParticipationRate": 0.23
  }
}
```

#### GET /api/analytics/hubs/{id}

Retrieve analytics for a specific hub.

**Response:**
```json
{
  "hubId": "hub_123",
  "period": "30d",
  "metrics": {
    "dailyActiveUsers": 245,
    "totalSessions": 1850,
    "avgSessionDuration": 22.3,
    "contentViews": {
      "education": 1250,
      "health": 890,
      "jobs": 650,
      "agriculture": 420
    },
    "deviceTypes": {
      "mobile": 0.78,
      "desktop": 0.15,
      "tablet": 0.07
    },
    "peakUsageHours": [
      { "hour": 9, "users": 89 },
      { "hour": 14, "users": 156 },
      { "hour": 19, "users": 134 }
    ]
  }
}
```

### Content

#### GET /api/content

Retrieve content available across hubs.

**Query Parameters:**
- `category` (string): Filter by category
- `language` (string): Filter by language
- `status` (string): Filter by status (approved, pending, rejected)
- `limit` (number): Results per page

**Response:**
```json
{
  "content": [
    {
      "id": "content_123",
      "title": "Digital Literacy Basics",
      "description": "Introduction to computer and internet basics",
      "category": "education",
      "type": "course",
      "language": "en",
      "targetAudience": ["Youth", "Adults"],
      "status": "approved",
      "author": "Kenya Education Board",
      "createdAt": "2023-12-01T00:00:00Z",
      "tags": ["digital-literacy", "basics", "computer"],
      "viewCount": 1250,
      "rating": 4.6
    }
  ]
}
```

#### POST /api/content

Submit new content for review.

**Request Body:**
```json
{
  "title": "Farming Best Practices",
  "description": "Modern farming techniques for small-scale farmers",
  "category": "agriculture",
  "type": "article",
  "language": "sw",
  "targetAudience": ["Farmers"],
  "tags": ["farming", "agriculture", "techniques"],
  "url": "https://example.com/farming-guide"
}
```

### Surveys

#### GET /api/surveys

Retrieve available surveys.

**Response:**
```json
{
  "surveys": [
    {
      "id": "survey_123",
      "title": "Community Needs Assessment",
      "description": "Help us understand your community's digital needs",
      "category": "needs",
      "questions": [
        {
          "id": "q1",
          "type": "multiple_choice",
          "question": "What services are most important to you?",
          "options": ["Education", "Healthcare", "Jobs", "Government Services"]
        }
      ],
      "active": true,
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### POST /api/surveys

Submit survey response.

**Request Body:**
```json
{
  "surveyId": "survey_123",
  "hubId": "hub_123",
  "responses": {
    "q1": ["Education", "Healthcare"],
    "q2": "Very satisfied",
    "q3": "Daily internet access has improved my job prospects"
  },
  "demographics": {
    "age": "25-34",
    "gender": "female",
    "occupation": "student"
  }
}
```

### Reports

#### POST /api/reports

Submit misinformation report.

**Request Body:**
```json
{
  "hubId": "hub_123",
  "contentUrl": "https://example.com/suspicious-content",
  "description": "This content contains false health information",
  "category": "health_misinformation",
  "reportedBy": "user_456"
}
```

#### GET /api/reports

Retrieve misinformation reports (Admin only).

**Query Parameters:**
- `status` (string): Filter by status
- `priority` (string): Filter by priority
- `limit` (number): Results per page

## Rate Limiting

API requests are rate-limited to prevent abuse:

- Public endpoints: 100 requests per minute
- Authenticated endpoints: 1000 requests per minute
- Admin endpoints: 5000 requests per minute

Rate limit headers are included in responses:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Missing or invalid authentication |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource doesn't exist |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error - Server error |

## SDKs and Libraries

Official SDKs are available for:

- JavaScript/TypeScript
- Python
- PHP
- Java

Example usage (JavaScript):

```javascript
import { ConnectedHubsAPI } from '@connected-hubs/sdk';

const api = new ConnectedHubsAPI({
  baseURL: 'https://api.connected-access-hubs.com',
  apiKey: 'your-api-key'
});

const hubs = await api.hubs.list({ region: 'Nairobi' });
```

## Webhooks

Configure webhooks to receive real-time notifications:

- Hub status changes
- New survey responses
- Content moderation updates
- System alerts

Webhook payload example:

```json
{
  "event": "hub.status_changed",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "hubId": "hub_123",
    "previousStatus": "active",
    "newStatus": "maintenance",
    "reason": "Scheduled maintenance"
  }
}
```