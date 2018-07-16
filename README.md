# Firebase chat application

ref. http://gihyo.jp/book/2018/978-4-7741-9706-7

## Getting started

### Initalize firebase

```sh
cp .firebaserc.sample .firebaserc
cp .env.sample .env

# Use FIREBASE_TOKEN to deploy
docker-compose run --rm --service-ports server firebase login:ci
echo FIREBASE_TOKEN=1/xxxxxx | tee -a .env >/dev/null

docker-compose run --rm --service-ports server firebase use --add
```

### Development on local server

```sh
# For Cloud Functions: open http://localhost:5000/
docker-compose up server

# For client side application: open http://localhost:8080/
docker-compose up client
```

## Deploy

```sh
NODE_ENV=production docker-compose up deploy
```
