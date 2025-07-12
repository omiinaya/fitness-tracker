# Security Policy: Fitness Tracker

## Reporting a Vulnerability
Please open an issue or contact the maintainer if you discover a security vulnerability.

## Security Best Practices
- All user input is validated and sanitized (see API and model validation)
- HTTP headers are set via Helmet
- CORS is restricted via environment variable
- Sensitive data is not committed to the repository
- Dependencies are kept up to date
- MongoDB connection errors are logged and handled
- Graceful shutdown on SIGINT/SIGTERM

## Recommendations for Deployment
- Always use HTTPS in production
- Set `NODE_ENV=production`
- Use strong, unique credentials for database and environment variables
- Regularly audit dependencies (`npm audit`)

## Disclosure
If you find a vulnerability, please disclose it responsibly.
