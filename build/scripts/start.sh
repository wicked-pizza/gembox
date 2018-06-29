#!/bin/sh

webpack --watch --hide-modules --progress \
& gulp \
& npm run server

date; echo;