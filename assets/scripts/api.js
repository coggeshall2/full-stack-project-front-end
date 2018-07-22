const config = require('./config')

const index = function(){

  // make GET request to /trails
  return $.ajax({
    url: config.apiUrl + '/trails',
    method: 'GET'
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiUrl + '/trails/' + data.trail.id,
    method: 'GET'
  })
}

const destroy = function (data) {
  return $.ajax({
    url: config.apiUrl + '/trails/' + data.trail.id,
    method: 'DELETE'
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/trails/' + data.trail.id,
    method: 'PATCH',
    data
  })
}
