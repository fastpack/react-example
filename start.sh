#!/bin/sh

ROOT="$PWD/src"
TTY=`tty`
# FPACK=`which fpack`
FPACK_CMD="fpack /Users/zindel/ocaml/react-example/src/index.js -w --dev --preprocess '^src' --output $PWD/root/js"

watchman -j <<-EOT >/dev/null 2>/dev/null
["trigger", "$ROOT", {
  "name": "js",
  "command": ["sh", "-c", "(env PATH=\"$PATH\" $FPACK_CMD) >$TTY 2>$TTY"],
  "stdout": ">>$TTY"
}]
EOT

cd root && static-server -p 3000 -i index.html --no-cache
watchman watch-del $ROOT >/dev/null 2>/dev/null
