# firebase-chat-server

ref. http://gihyo.jp/book/2018/978-4-7741-9706-7

## Getting started

### Initalize firebase

```sh
docker-compose run --rm --service-ports node firebase login
docker-compose run --rm --service-ports node firebase init
```

### Development on local server

```sh
docker-compose up
```

open `localhost:5000`

### Deploy functions

```sh
docker exec -it $(docker ps -qf "name=firebase-chat-server") firebase deploy --only functions
```
