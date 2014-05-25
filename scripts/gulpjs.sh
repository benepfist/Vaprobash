#!/usr/bin/env bash

# Test if NodeJS is installed
node -v > /dev/null 2>&1
NODE_IS_INSTALLED=$?

# True, if Node is not installed
if [ $NODE_IS_INSTALLED -ne 0 ] 
then
	echo ">>>> First install Node"
	exit
fi

echo ">>>> Install gulp and plugins"

npm install gulp $@ --save-dev --no-bin-links

echo ">>>> Done"

