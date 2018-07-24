const config = require('./config')
const store = require('./store')

const index = function(){
  // make GET request to /trails
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/trails',
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
  index,
  show,
  destroy,
  update,
  create
}
