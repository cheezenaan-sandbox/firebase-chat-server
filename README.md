# Firebase chat application

ref. http://gihyo.jp/book/2018/978-4-7741-9706-7

## Getting started

### Initalize firebase

```sh
docker-compose run --rm --service-ports server sh
```

```sh
# Inside docker container:
firebase login
firebase init
```

### Development on local server

```sh
docker-compose up
```

open `localhost:5000`

## Deploy

```sh
# Use FIREBASE_TOKEN to deploy
firebase login:ci
echo FIREBASE_TOKEN=1/xxxxxx | tee -a .env >/dev/null

NODE_ENV=production docker-compose up deploy
```
