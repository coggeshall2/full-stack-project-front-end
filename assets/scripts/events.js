const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetTrails = function(event){

  // prevent default submit action
  event.preventDefault()

  // make API call
  api.index()

  // if API call is successful then
  .then(ui.onIndexSuccess)

  // if API call fails then
  .catch(ui.onError)

}

const onGetTrail = function (event) {
  event.preventDefault()

  // create js object from user form data
  const data = getFormFields(event.target)

  // input validation
  if (data.trail.id === '') {
    $('#content').html('<p>ID is required</p>')

  } else {

    // make API call with data
    api.show(data)
      .then(ui.onShowSuccess)
      .catch(ui.onError)
  }
 }

const onDeleteTrail = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  // input validation
  if (data.trail.id === '') {
    $('#content').html('<p>ID is required</p>')

  } else {
    api.destroy(data)
      .then(ui.onDestroySuccess)
      .catch(ui.onError)
  }
}

const onUpdateTrail = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  // input validation
  if (data.trail.trail_name === '') {
    $('#content').html('<p>Trail name is required</p>')

  } else if (data.trail.location === '') {
    $('#content').html('<p>Location is required</p>')

  } else if (data.trail.id === '') {
    $('#content').html('<p>ID is required</p>')

  } else if (data.trail.distance === '') {
    $('#content').html('<p>Distance is required</p>')

  } else if (data.trail.elevation_gain === '') {
    $('#content').html('<p>Elevation gain is required</p>')

  } else if (data.trail.trail_type === '') {
    $('#content').html('<p>Trail type is required</p>')

  } else if (data.trail.skill_level === '') {
    $('#content').html('<p>Skil level is required</p>')

  } else {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onError)
  }
}

const onCreateTrail = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  // input validation
  if (data.trail.trail_name === '') {
    $('#content').html('<p>Trail name is required</p>')

  } else if (data.trail.location === '') {
    $('#content').html('<p>Location is required</p>')

  } else if (data.trail.id === '') {
    $('#content').html('<p>ID is required</p>')

  } else if (data.trail.distance === '') {
    $('#content').html('<p>Distance is required</p>')

  } else if (data.trail.elevation_gain === '') {
    $('#content').html('<p>Elevation gain is required</p>')

  } else if (data.trail.trail_type === '') {
    $('#content').html('<p>Trail type is required</p>')

  } else if (data.trail.skill_level === '') {
    $('#content').html('<p>Skil level is required</p>')

  } else {
    api.create(data)
      .then(ui.onCreateSuccess)
      .catch(ui.onError)
  }
}

module.exports = {
  onGetTrails,
  onGetTrail,
  onDeleteTrail,
  onUpdateTrail,
  onCreateTrail
}
