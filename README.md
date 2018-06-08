# firebase-chat-server

ref. http://gihyo.jp/book/2018/978-4-7741-9706-7

## Getting started

```zsh
$ docker-compose run --rm --service-ports node firebase login
$ docker-compose run --rm --service-ports node firebase init
$ docker-compose up

# Deploy functions
$ docker exec -it $(docker ps -qf "name=$(basename $(pwd))") firebase deploy --only functions
```
