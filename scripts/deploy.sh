#!/bin/sh -e

if [ "$NODE_ENV" != "production" ]; then
	echo "Error: Please execute in production"
	exit 1
fi

echo "Begin production deployment to Firebase ..."
yarn deploy
