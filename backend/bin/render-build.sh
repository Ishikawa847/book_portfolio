#!/usr/bin/env bash
set -e

echo "== Installing gems =="
bundle install

echo "== Running database migrations =="
bundle exec rails db:migrate

echo "== Build finished =="
