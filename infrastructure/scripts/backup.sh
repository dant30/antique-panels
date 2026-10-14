#!/usr/bin/env bash
set -e

BACKUP_DIR="/var/backups/antiquepanels"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
mkdir -p "$BACKUP_DIR"

echo "==> Backing up Antique Panels PostgreSQL Database..."
docker exec antiquepanels_db_1 pg_dump -U antique antiquepanels_db | gzip > "$BACKUP_DIR/db_$TIMESTAMP.sql.gz"
echo "==> Database backup saved: $BACKUP_DIR/db_$TIMESTAMP.sql.gz"
