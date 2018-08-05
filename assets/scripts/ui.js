const store = require('./store')

const onIndexSuccess = function(data){
  // empty content element
  $('#content').html('')
  // console.table(data.trails)
  // loop through API response data
  data.trails.forEach(trail => {
    // build HTML element with data
    const trailHTML = (`
      <h4>Trail Name: ${trail.trail_name}</h4>
      <p>Trail ID: ${trail.id}</p>
      <p>Location: ${trail.location}</p>
      <p>Distance: ${trail.distance}</p>
      <p>Elevation gain: ${trail.elevation_gain}</p>
      <p>Trail type: ${trail.trail_type}</p>
      <p>Skill level: ${trail.skill_level}</p>
      <br>
    `)
    // append trailHTML to content
    $('#content').append(trailHTML)
    $('#trails-index-message').text('Successfully Completed Task, scroll down for results')
    $('#trails-index-message').css('background-color', 'green')
    $('#trails-index-message').fadeOut(10000)
    // console.log('Successfully completed. Data is :', data)
  })
}

const onGetSuccess = function (data) {
          $('#content').html('')
      // console.table(data.trails)
      // loop through API response data
      // build HTML element with data
        const trailHTML = (`
          <h4>Trail Name: ${data.trail.trail_name}</h4>
          <p>Location: ${data.trail.location}</p>
          <p>Distance: ${data.trail.distance}</p>
          <p>Elevation gain: ${data.trail.elevation_gain}</p>
          <p>Trail type: ${data.trail.trail_type}</p>
          <p>Skill level: ${data.trail.skill_level}</p>
          <br>
        `)
        // append trailHTML to content
        $('#content').append(trailHTML)
        $('#trails-show-message').text('Successfully Completed Task, scroll down for results')
        $('#trails-show-message').css('background-color', 'green')
        $('#trails-show-message').fadeOut(10000)
        console.log('Successfully completed. Data is :', data)
    }

  // reset form
  $('#trails-show').trigger("reset")


const onDestroySuccess = function (){

  $('#content').html("Trail Successfully Deleted!")
  $('#trails-delete-message').text('Successfully Deleted Trail')
  $('#trails-delete-message').css('background-color', 'green')
  $('#trails-delete-message').fadeOut(10000)
  // console.log('Successfully run. Data is :', data)

  // reset form
  $('#trails-delete').trigger("reset")
}

const onUpdateSuccess = function (data) {
  $('#content').html('')
// console.table(data.trails)
// loop through API response data
// build HTML element with data
const trailHTML = (`
  <h4>Trail Name: ${data.trail.trail_name}</h4>
  <p>Location: ${data.trail.location}</p>
  <p>Distance: ${data.trail.distance}</p>
  <p>Elevation gain: ${data.trail.elevation_gain}</p>
  <p>Trail type: ${data.trail.trail_type}</p>
  <p>Skill level: ${data.trail.skill_level}</p>
  <br>
`)
// append trailHTML to content
$('#content').append(trailHTML)
$('#trails-update-message').text('Successfully Update Trail')
$('#trails-update-message').css('background-color', 'green')
$('#trails-update-message').fadeOut(10000)
// console.log('Successfully completed. Data is :', data)
}

const onCreateSuccess = function (data) {
  $('#content').html('You created a new trail!')
  $('#trails-create-message').text('Successfully Created New Trail')
  $('#trails-create-message').css('background-color', 'green')
  $('#trails-create-message').fadeOut(10000)
  // console.log('Successfully run. Data is :', data)
  // reset form
  $('#trails-create').trigger("reset")
}

const onFailure = function(data){
  // log the error
  // console.error(data)

  // display error to user
  $('#content').html('Something went wrong, please try again.')
  $('#messages').text('Error on submit')
  $('#messages').css('background-color', 'red')
  // console.error('Failure when command ran. Error is :', error)
}

module.exports = {
  onIndexSuccess,
  onGetSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onFailure
}
