#!/bin/bash

FECHA=$(date +%Y-%m-%d_%H-%M)
DESTINO=~/backups

mkdir -p $DESTINO

pg_dump -p 5433 -h /tmp pagila > $DESTINO/pagila_$FECHA.sql

echo "Backup realizado: $FECHA"

