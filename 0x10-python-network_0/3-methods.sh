#!/bin/bash
# displays all HTTP methods the server will be accepted.
curl -sI "$1" | grep "Allow" | cut -d " " -f 2-
