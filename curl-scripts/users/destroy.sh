#!/bin/bash

curl --include --request DELETE "http://localhost:7165/${ID}"
     --header "Authorization: Token token=${TOKEN}" \
echo
