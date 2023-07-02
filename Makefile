docker-build:
	docker compose up -d --build

docker-up:
	docker compose up -d

docker-down:
	docker compose down
node-bash:
	docker compose exec temporal-service sh

