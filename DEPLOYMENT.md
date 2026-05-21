# Deployment Guide: Fitness Tracker

## Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- Heroku, Render, or similar PaaS (optional)

## Environment Variables

Create a `.env` file in the project root:

```
PORT=8080
MONGODB_URI=mongodb://localhost/fitness-tracker
CORS_ORIGIN=http://localhost:8080
```

## Local Deployment

```bash
npm install
npm start
```

Visit [http://localhost:8080](http://localhost:8080)

## Production Deployment (Heroku Example)

1. Provision a MongoDB database (e.g., MongoDB Atlas)
2. Set environment variables in Heroku dashboard
3. Deploy via GitHub or Heroku CLI

## Health Check

- `GET /health` returns status, uptime, and DB connection state

## Security

- Ensure `NODE_ENV=production` in production
- Use HTTPS in production

## Troubleshooting

- Check logs for errors: `heroku logs --tail` or `npm run start`
- Ensure MongoDB URI is correct and accessible

## Updating

- Pull latest changes, run `npm install`, and restart the server

---

For more, see the main `README.md` and `SECURITY.md`.
