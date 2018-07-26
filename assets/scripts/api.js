const config = require('./config')
const store = require('./store')

const trailsIndex = function(){
  console.log(store)
  // make GET request to /trails
  return $.ajax({
    url: config.apiUrl + '/trails/',
    method: 'GET'
  })
}

const getTrail = function (data) {
    console.log('data is ', data)
    console.log(store)
  return $.ajax({
    url: config.apiUrl + '/trails/' + data.trail.id,
    method: 'GET',
    headers:{
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroyTrail = function (data) {
  console.log('data is ', data)
  console.log(store)
  console.log(data.trail.id)
  return $.ajax({
    url: config.apiUrl + '/trails/' + data.trail.id,

    method: 'DELETE',
    headers:{
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateTrail = function (data) {
  console.log('data is ', data)
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/trails/' + data.trail.trail_id,
    method: 'PATCH',
    headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data
      // data: data
    })
  }

const createTrail = function (data) {
  console.log('data is ', data)
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/trails',
    method: 'POST',
    headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data
      // data: data
    })
  }

module.exports = {
  trailsIndex,
  getTrail,
  destroyTrail,
  updateTrail,
  createTrail
}
