'use strict'
const events = require('./events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#trails-index').on('submit', events.onGetTrails)
  $('#trails-show').on('submit', events.onGetTrail)
  $('#trails-delete').on('submit', events.onDeleteTrails)
  $('#trails-update').on('submit', events.onUpdateTrails)
  $('#trails-create').on('submit', events.onCreateTrails)
})
