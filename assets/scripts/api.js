const config = require('./config')
const store = require('./store')

const trailIndex = function(){
  // make GET request to /trails
  return $.ajax({
    url: config.apiUrl + '/trails/',
    method: 'GET'
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiUrl + '/trails/' + data.trail.id,
    method: 'GET',
    headers:{
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroy = function (data) {
  return $.ajax({
    url: config.apiUrl + '/trails/' + data.trail.id,
    method: 'DELETE',
    headers:{
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/trails/' + data.trail.id,
    method: 'PATCH',
    headers:{
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/trails',
    method: 'POST',
    headers:{
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  trailIndex,
  show,
  destroy,
  update,
  create
}
