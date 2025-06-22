# Quick Start Guide

## Prerequisites
- Node.js 18+ installed
- Git installed

## Run Locally (5 minutes)

### 1. Install Dependencies
```bash
cd "C:\Connected africa\connected-access-hubs\frontend"
npm install
```

### 2. Start Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

## What You'll See

- **Homepage**: Hero section with stats and features
- **Hub Map**: Interactive map with sample hubs in Kenya
- **Navigation**: Working menu and responsive design
- **Mock Data**: Sample hubs, analytics, and content

## Sample Features Working

✅ Interactive map with 3 sample hubs
✅ Responsive navigation
✅ Hub filtering and search
✅ Mobile-first design
✅ Real-time hub status indicators

## Next Steps

To add backend functionality:
1. Deploy AWS infrastructure using `backend/serverless.yml`
2. Configure environment variables
3. Connect frontend to live APIs

## Troubleshooting

**Port 3000 in use?**
```bash
npm start -- --port 3001
```

**Missing dependencies?**
```bash
npm install --legacy-peer-deps
```