#!/bin/bash

curl --include --request DELETE "https://wdi-library-api.herokuapp.com/books/${ID}"
     --header "Authorization: Token token=${TOKEN}" \
echo
