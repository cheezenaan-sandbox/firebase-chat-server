#!/bin/sh -e
cd ./functions

echo "Install dependencies ..."
yarn install

echo "Initialize local server ..."
yarn serve -o 0.0.0.0
