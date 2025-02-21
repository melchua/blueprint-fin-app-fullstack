We use Docker.

# For development

docker compose down
docker compose build --no-cache # Force rebuild
docker compose up

# Or for production

docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml build --no-cache
docker compose -f docker-compose.prod.yml up
