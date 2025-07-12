# Fitness Tracker

A modern fitness tracker app to log, view, and analyze your workouts. Built with Node.js, Express, MongoDB, and a progressive, accessible frontend.

## Features
- Log resistance and cardio workouts
- Dashboard with charts and stats
- Accessible, SEO-optimized, and Lighthouse-friendly UI
- RESTful API with validation and error handling
- Security best practices (Helmet, CORS, input validation)
- Graceful shutdown and health check endpoint

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas)

### Installation
```bash
git clone <repo-url>
cd fitness-tracker
npm install
```

### Running Locally
```bash
npm start
```
Visit [http://localhost:8080](http://localhost:8080)

### Running Tests
```bash
npm test
```

## API Endpoints
- `GET /api/workouts` - List all workouts
- `POST /api/workouts` - Create a new workout
- `PUT /api/workouts/:id` - Add exercise to a workout
- `GET /api/workouts/range` - Get workouts in range
- `GET /health` - Health check

## Accessibility & SEO
- Skip links, ARIA roles, semantic HTML
- Meta tags for SEO and social sharing
- Color contrast and keyboard navigation

## Security
- Helmet for HTTP headers
- CORS configuration
- Input validation (express-validator)

## Deployment
- See `DEPLOYMENT.md` for deployment instructions

## License
MIT
