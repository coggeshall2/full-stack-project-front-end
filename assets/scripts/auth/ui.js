'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#messages').text('Signed up successfully')
  $('#messages').css('background-color', 'green')
  $('#messages').fadeOut(10000)
  $('#signUp').css('display', 'none')
  // console.log('signUpSuccess ran. Data is :', data)
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (error) {
  $('#messages').text('Error on sign up')
  $('#messages').css('background-color', 'red')
  $('#messages').fadeOut(10000)
  // console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#messages').text('Signed in successfully')
  $('#messages').css('background-color', 'green')
  $('#messages').fadeOut(10000)
  $('#signUp').css('display', 'none')
  $('#signIn').css('display', 'none')
  $('.userButtons').css('display', 'block')
  store.user = data.user
  $('#sign-in').trigger('reset')
  // console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = function (error) {
  $('#messages').text('Error on sign in')
  $('#messages').css('background-color', 'red')
  $('#messages').fadeOut(10000)
  // console.log('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#messages').text('Signed out successfully')
  $('#messages').css('background-color', 'green')
  $('#messages').fadeOut(10000)
  $('.userButtons').css('display', 'none')
  $('.userInfo').css('display', 'none')
  $('#trail-info').css('display', 'none')
  $('#signUp').css('display', 'block')
  $('#signIn').css('display', 'block')
  $('.userInfo').trigger('reset')
  store.user = null
}

const signOutFailure = function (error) {
  $('#messages').text('Error on sign Out')
  $('#messages').css('background-color', 'red')
  $('#messages').fadeOut(10000)
  // console.log('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#change-password-message').text('Changed password successfully')
  $('#change-password-message').css('background-color', 'green')
  $('#change-password-message').fadeOut(10000)
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#change-password-message').text('Error on change password')
  $('#change-password-message').css('background-color', 'red')
  $('#change-password-message').fadeOut(10000)
  // console.log('changePasswordFailure ran. Error is :', error)
}


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
