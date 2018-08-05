
// toggle register info
// $(document).ready(function () {
//   $('#register').click(function () {
//     $('#signInUp').toggle()
//   })
// })

// toggle sign-in info
// $(document).ready(function () {
//   $('#signinButton').click(function () {
//     $('#sign-in-message').toggle()
//   })
// })

// toggle user info
$(document).ready(function () {
  $('#seeInfo').click(function () {
    $('.userInfo').toggle()
  })
})

  // toggle sign out
$(document).ready(function () {
  $('#sign-out').click(function () {
    $('#signUp', '#signin').toggle()
  })
})

// toggle change password
$(document).ready(function () {
  $('#trailInfo').click(function () {
    $('#trail-info').toggle()
  })
})
