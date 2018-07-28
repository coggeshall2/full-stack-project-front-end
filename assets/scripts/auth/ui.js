'use strict'

const store = require('../store')

const signUpSuccess = function (data) {

  $('#sign-up-message').text('Signed up successfully')
  $('#sign-up-message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
    $('#sign-up').trigger('reset')
}

const signUpFailure = function (error) {
  $('#sign-up-message').text('Error on sign up')
  $('#sign-up-message').css('background-color', 'red')
  console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-in-message').text('Signed in successfully')
  $('#sign-in-message').css('background-color', 'green')
  
  console.log('signInSuccess ran. Data is :', data)
  $('#sign-in').trigger('reset')
    // console.log(store)
}

const signInFailure = function (error) {
  $('#sign-in-message').text('Error on sign in')
  $('#sign-in-message').css('background-color', 'red')
  console.log('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#sign-out-message').text('Signed out successfully')
  $('#sign-out-message').css('background-color', 'green')
  console.log('signOutSuccess ran and nothing was returned!')
  $('#sign-out').trigger('reset')
    store.user = null
}

const signOutFailure = function (error) {
  $('#sign-out-message').text('Error on sign Out')
  $('#sign-out-message').css('background-color', 'red')
  console.log('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#change-password-message').text('Changed password successfully')
  $('#change-password-message').css('background-color', 'green')
  console.log('changePasswordSuccess ran and nothing was returned! ')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#change-password-message').text('Error on change password')
  $('#change-password-message').css('background-color', 'red')
  console.log('changePasswordFailure ran. Error is :', error)
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
