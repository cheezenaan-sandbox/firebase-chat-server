#!/bin/sh -e

echo "Install dependencies ..."
yarn install

echo "Initialize local server ..."
yarn serve
