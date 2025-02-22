# Overview

Platform for a financial planner app. I plan to use this as a base for a few different apps. It's got a FastAPI backend, a React frontend, and a PostgreSQL database hosted on Supabase.

# For development

```bash
docker compose down
docker compose build --no-cache # Force rebuild
docker compose up
```

# For production

```bash
docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml build --no-cache
docker compose -f docker-compose.prod.yml up
```

# Auth strategy

- Supabase auth is used to authenticate users on the frontend
- The frontend will send the user's session token to the FastAPI backend
- The backend will use the session token to authenticate the user on the API
- There will be a set of protected routes that require a valid session token

# Database

- The database is a PostgreSQL database that is hosted on Supabase
- The database is used to store the user's data
- The database is accessed by the backend API

# Reasoning: We can just plop a Supabase url and not have to worry about rolling out our own database.

We should however, use two separate databases: one for production and one for development.
