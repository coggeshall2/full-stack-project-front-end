#!/bin/bash

curl "http://localhost:4741" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    trail: {
      "trail_name": "'"${TNAME}"'",
      "location": "'"${LOC}"'",
      "distance": "'"${DIST}"'",
      "elevation_gain": "'"${ELGAIN}"'",
      "trail_type": "'"${TTYPE}"'",
      "skill_level": "'"${SLEVEL}"'"
    }
  }'

echo
