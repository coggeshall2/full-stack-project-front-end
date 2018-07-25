'use strict'
const events = require('./events')
const authEvents = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  authEvents.addHandlers()
  $('#trails-index').on('submit', events.onTrailsIndex)
  $('#trails-show').on('submit', events.onGetTrail)
  $('#trails-delete').on('submit', events.onDestroyTrail)
  $('#trails-update').on('submit', events.onUpdateTrail)
  $('#trails-create').on('submit', events.onCreateTrail)
})
