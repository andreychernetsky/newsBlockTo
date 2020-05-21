document.querySelector('.c-hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  // this.classList.toggle('is-active');
  if (this.classList.contains('is-active')) {
    this.classList.remove('is-active');
    document.querySelector('#menu').classList.remove('nav-active');
    document.body.classList.remove('body-active');
  } else {
    this.classList.add('is-active');
    document.querySelector('#menu').classList.add('nav-active');
    document.body.classList.add('body-active');
  }
});


/*
let burger = document.querySelector('.c-hamburger');
let bodyB = document.querySelector('.body');
let nav = document.querySelector('.nav');
let timeout;

nav.addEventListener('mouseout', function(){
  clearTimeout(timeout);
  timeout = setTimeout(()=>{
    bodyB.classList.remove('is-active');
  },2000);
});

burger.addEventListener('click', function () {
bodyB.classList.toggle('is-active')
});
*/
