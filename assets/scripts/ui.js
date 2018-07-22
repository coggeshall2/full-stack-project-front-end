const store = require('./store')

const onIndexSuccess = function(response){
  // empty content element
  $('#content').html('')

  // loop through API response data
  response.trails.forEach(trail => {

    // build HTML element with data
    const trailHTML = (`
      <h4>Trail Name: ${response.trail.trail_name}</h4>
      <p>Location: ${response.trail.location}</p>
      <p>Distance: ${response.trail.distance}</p>
      <p>Elevation gain: ${response.trail.elevation_gain}</p>
      <p>Trail type: ${response.trail.trail_type}</p>
      <p>Skill level: ${response.trail.skill_level}</p>
      <br>
    `)

    // append trailHTML to content
    $('#content').append(trailHTML)
    $('#message').text('Successfully Completed Task')
    $('#message').css('background-color', 'green')
    console.log('Successfully completed. Data is :', data)
  })
}

const onShowSuccess = function (response) {

  const trailHTML = (`
    <h4>Trail Name: ${response.trail.trail_name}</h4>
    <p>Location: ${response.trail.location}</p>
    <p>Distance: ${response.trail.distance}</p>
    <p>Elevation gain: ${response.trail.elevation_gain}</p>
    <p>Trail type: ${response.trail.trail_type}</p>
    <p>Skill level: ${response.trail.skill_level}</p>
    <br>
  `)

  $('#content').html(trailHTML)
  $('#message').text('Successfully Completed Task')
  $('#message').css('background-color', 'green')
  console.log('Successfully run. Data is :', data)

  // reset form
  $('#trail-show').trigger("reset")
}

const onDestroySuccess = function(){

  $('#content').html("Book Successfully Deleted!")
  $('#message').text('Successfully Completed Task')
  $('#message').css('background-color', 'green')
  console.log('Successfully run. Data is :', data)

  // reset form
  $('#trail-delete').trigger("reset")
}

const onUpdateSuccess = function (response) {
  $('#content').html('You successfully updated the trail')
  $('#message').text('Successfully Completed Task')
  $('#message').css('background-color', 'green')
  console.log('Successfully run. Data is :', data)
  // reset form
  $('#trail-update').trigger("reset")
}

const onCreateSuccess = function () {
  $('#content').html('You created a new trail!')
  $('#message').text('Successfully Completed Task')
  $('#message').css('background-color', 'green')
  console.log('Successfully run. Data is :', data)
  // reset form
  $('#trail-create').trigger("reset")
}

const onFailure = function(response){
  // log the error
  console.error(response)

  // display error to user
  $('#content').html('Something went wrong, please try again.')
  $('#message').text('Error on submit')
  $('#message').css('background-color', 'red')
  console.error('Failure when command ran. Error is :', error)
}

module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onFailure
}
