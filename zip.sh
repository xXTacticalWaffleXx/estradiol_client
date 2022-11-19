#!/bin/bash

# author: luna aphelion <luna-aphelion@proton.me>
#
# this script is meant to make it easy to make new releases of estradiol client
# for the chat triggers website

if ls EstradiolClient 2> /dev/null > /dev/null; then
  echo "EstradiolClient already exists, exiting"
  exit
fi

mkdir EstradiolClient

cp -r features ./EstradiolClient
cp -r misc ./EstradiolClient
cp -r utils ./EstradiolClient

cp index.js ./EstradiolClient
cp config.js ./EstradiolClient
cp metadata.json ./EstradiolClient

zip -r EstradiolClient.zip EstradiolClient

rm -r EstradiolClient
