/*
{

  const wrapSidebar = document.querySelector('[data-wrap]');
  const btnOpen = document.querySelector('.openbtn');
  const btnClose = document.querySelector('.closebtn');
  let mass = [];

  function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.body.style.overflow = 'hidden';
    wrapSidebar.style.right = "0";
  }

  function closeNav(e) {
    e.preventDefault();
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.overflow = 'auto';
    wrapSidebar.style.right = '';
  }

  function clearTimer() {
    mass.forEach(function(item){
      clearTimeout(item);
      mass = mass.splice(item, 1);
    });
  }

  wrapSidebar.addEventListener('click', function(e){
    const target = e.target;
    const getData = target.dataset.wrap;
    if(getData === 'wrap') {
      clearTimer();
      closeNav(e);
    }
  });

  wrapSidebar.addEventListener('mouseover', function(e){
    e.preventDefault;
    function close(){
      closeNav(e);
    }
    const target = e.target;
    const getData = target.dataset.wrap;
    const timer = setTimeout(close, 2000);
    mass.push(timer) ;

    if (getData !== 'wrap') {
      clearTimer();
    }
  });
  btnOpen.addEventListener('click', openNav);
  btnClose.addEventListener('click', closeNav);

};*/
{
  const leftmenu = document.querySelector('.left-menu');
  const hamburger = document.querySelector('.hamburger');

  //открытие на кнопку
  hamburger.addEventListener('click', () => {
    leftmenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
  });

  //закрытие при клике не на меню
  document.addEventListener('click',(event)=>{
    if (!event.target.closest('.left-menu')){ //ищет вверх по дум дереву элемент left-menu
      leftmenu.classList.remove('openMenu');
    }
  });

  //открытие при клике на конкретный пункт
  leftmenu.addEventListener('click',(event)=>{
    const target = event.target;
    const dropdown = target.closest('.sub-block__link');
    if (dropdown){
      dropdown.classList.toggle('active');
      leftmenu.classList.add('openMenu');
      hamburger.classList.add('open');
    };
  });

}