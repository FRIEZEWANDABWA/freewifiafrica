# Connected Access Hubs

A responsive, scalable web platform showcasing free public Wi-Fi projects for underserved communities in Africa, targeting the Gates Foundation and other stakeholders.

## Overview

Connected Access Hubs is a comprehensive platform that demonstrates the impact of digital access initiatives across Sub-Saharan Africa, starting with Kenya as a pilot program. The platform showcases how digital access hubs deliver free Wi-Fi, educational content, and essential services to underserved communities.

## Key Features

### 🌍 Interactive Hub Map
- Real-time visualization of connected sites across Africa
- Live data on user activity, content usage, and community feedback
- Regional analytics and impact metrics

### 📊 Analytics Dashboard
- Number of active users per location
- Most viewed content categories
- Survey responses and community feedback
- Regional trends and misinformation reports
- Role-based access for different stakeholders

### 🎯 Hub Project Showcase
- Detailed implementation strategies
- Target audience analysis
- Data collection methodologies
- Impact metrics and success stories

### 📱 User Portal
- Available hubs directory
- Connection instructions
- Benefits overview
- Testimonial videos
- Micro-courses and educational content
- FAQ section

### 🛡️ Content Moderation
- Partner content submission system
- Review and approval workflow
- Community-driven content curation

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Leaflet** for interactive maps
- **Chart.js** for data visualization
- **PWA** capabilities for offline access

### Backend (AWS Serverless)
- **AWS Amplify** for hosting and CI/CD
- **AWS Lambda** for serverless functions
- **Amazon DynamoDB** for data storage
- **Amazon API Gateway** for REST APIs
- **Amazon Cognito** for authentication
- **Amazon QuickSight** for advanced analytics

### Additional Services
- **Amazon S3** for media storage
- **Amazon CloudFront** for global CDN
- **AWS IoT Core** for real-time hub data
- **Amazon SES** for email notifications

## Getting Started

### Prerequisites
- Node.js 18+
- AWS CLI configured
- AWS Amplify CLI

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd connected-access-hubs
```

2. Install dependencies
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. Configure AWS Amplify
```bash
amplify init
amplify push
```

4. Start development server
```bash
cd frontend
npm start
```

## Deployment

The platform uses AWS Amplify for automated deployment:

```bash
# Deploy to staging
amplify publish

# Deploy to production
amplify publish --environment prod
```

## Use Cases

### Primary Focus: Kenya Pilot Program
- Rural connectivity initiatives
- Educational content delivery
- Healthcare information access
- Agricultural guidance and market information
- Job board and skills development

### Scalability Across Sub-Saharan Africa
- Multi-language support
- Regional content customization
- Local partnership integration
- Cultural adaptation frameworks

## Impact Metrics

- **Digital Inclusion**: Number of users gaining internet access
- **Educational Impact**: Course completions and skill development
- **Economic Empowerment**: Job placements and business opportunities
- **Health Outcomes**: Health information access and awareness
- **Community Engagement**: Local content creation and participation

## Contributing

Please read our contributing guidelines and code of conduct before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.