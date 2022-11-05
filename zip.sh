#!/bin/bash

# author: luna aphelion <luna-aphelion@proton.me>
#
# this script is meant to make it easy to make new releases of estradiol client
# for the chat triggers website

mkdir Estradiol

cp Ashfang.js ./Estradiol
cp LICENCE ./Estradiol
cp Misc.js ./Estradiol
cp Pet_Display.js ./Estradiol
cp commands.js ./Estradiol
cp config.js ./Estradiol
cp index.js ./Estradiol
cp metadata.json ./Estradiol
cp utils.js ./Estradiol

zip -r Estradiol.zip Estradiol

rm -r Estradiol
