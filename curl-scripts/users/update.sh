#!/bin/bash

curl "http://localhost:4741/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    trail: {
      "trail_name": "'"${TNAME}"'"
      "location": "'"${LOC}"'",
      "distance": "'"${DIST}"'",
      "elevation_gain": "'"${ELGAIN}"'",
      "trail_type": "'"${TTYPE}"'",
      "skill_level": "'"${SLEVEL}"'"
    }
  }'

echo
