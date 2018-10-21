#!/bin/bash

if [ "$WATCH" = "false" ]; then
  yarn run build
else
  yarn run watch
fi