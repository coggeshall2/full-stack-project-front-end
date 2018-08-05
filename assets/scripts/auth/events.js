'use strict'


const getFormFields = require('../../../lib/get-form-fields')
const api = require('../auth/api')
const ui = require('../auth/ui')

const onSignUp = function (event) {
  // important to have event.preventDefault!!!!

  event.preventDefault()

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  // important to have event.preventDefault!!!!
  event.preventDefault()
  console.log('signin running')
  
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}
// const getFormFields = require('../../../lib/get-form-fields')
//
// const api = require('./api')
// const ui = require('./ui')
//
// const onSignUp = function (event) {
//   event.preventDefault()
//   console.log('sign up ran!')
//
//   const data = getFormFields(this)
//   api.signUp(data)
//     .then(ui.signUpSuccess)
//     .catch(ui.signUpFailure)
// }
//
//
// const onSignIn = function (event) {
//   event.preventDefault()
//   console.log('sign in ran!')
//
//   const data = getFormFields(this)
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran')

  const data = getFormFields(this)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
