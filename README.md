# Quiz App

A quiz application with a React frontend, Node.js backend, and PostgreSQL database.

## Prerequisites

- Docker
- Docker Compose

## Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd quiz-app
   ```

2. **Configure environment variables**

   Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and update the following values:

   - `POSTGRES_PASSWORD`: Set a strong password for the database
   - `RESEND_API_KEY`: Add your Resend API key for email functionality
   - `ADMIN_PASSWORD`: Set a secure admin password
   - `JWT_SECRET`: Generate a secure random string for JWT signing

3. **Start the application**

   ```bash
   docker-compose up -d
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Admin Panel: http://localhost:3000/gestion-qcm.html
   - Backend API: http://localhost:3007

## Environment Variables

| Variable            | Description               | Default                |
| ------------------- | ------------------------- | ---------------------- |
| `POSTGRES_USER`     | Database user             | `quiz_user`            |
| `POSTGRES_PASSWORD` | Database password         | `quiz_password`        |
| `POSTGRES_DB`       | Database name             | `quiz_db`              |
| `RESEND_API_KEY`    | Resend API key for emails | (required)             |
| `ADMIN_USERNAME`    | Admin username            | `admin`                |
| `ADMIN_PASSWORD`    | Admin password            | `changeme`             |
| `JWT_SECRET`        | Secret for JWT signing    | (change in production) |

## Services

The application consists of three services:

- **database**: PostgreSQL 16 (port 5432)
- **backend**: Node.js API (port 3007)
- **frontend**: React app served by Nginx (port 3000)

## Useful Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# View logs for a specific service
docker-compose logs -f backend

# Rebuild and restart services
docker-compose up -d --build

# Remove all containers and volumes
docker-compose down -v
```

## Database

The database is automatically initialized with the schema from [database/init.sql](database/init.sql).

Data is persisted in a Docker volume named `postgres_data`.

## Security Notes

⚠️ **Important**: Before deploying to production:

- Change all default passwords
- Use a strong, randomly generated `JWT_SECRET`
- Never commit your `.env` file to version control
- Consider using Docker secrets for sensitive data
