// sing in
$(document).ready(function () {
  $('#lbutton').click(function () {
    let uname = $('.uname').val();
    let pass = $('.pass').val();
    console.log(uname);
    if (uname === 'swapnil' && pass === '123456') {
      location.href = './error.html';
    }
  });
});

// sing up

$(document).ready(function () {
  $('#sbutton').click(function () {
    let uname = $('.suname').val();
    let pass = $('.spass').val();
    let pass2 = $('.spass2').val();
    let email = $('.semail').val();
    //    console.log(uname, pass, pass2, email);
    if (pass === pass2) {
      $.post(
        'http://localhost:3000/login',
        {
          userName: uname,
          password: pass,
          email: email,
        },
        function (err) {
          console.log('error', err);
        },
      );
    } else {
      alert('password is not maching');
    }
  });
});
