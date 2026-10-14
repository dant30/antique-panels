#!/usr/bin/env bash
set -e

echo "==> Deploying Antique Panels to Production Server..."
git pull origin main
docker compose -f infrastructure/docker/docker-compose.yml build
docker compose -f infrastructure/docker/docker-compose.yml up -d
echo "==> Antique Panels Deployment Successful."
