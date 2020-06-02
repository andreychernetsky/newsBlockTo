document.addEventListener('DOMContentLoaded', function() {
  
const btn = document.getElementById('menu-button'),
  menuOpen = document.getElementById('menu-overlay');

  let menu = document.querySelector('.menu-overlay');
  let menubutton = document.querySelector('.menu-button');



btn.addEventListener('click',toggle_visibility);
  function toggle_visibility(){
    if(menuOpen.style.display === 'flex') {
      menuOpen.style.display ='none';
    } else {
      menuOpen.style.display ='flex';
    }
  }


window.addEventListener('click',function(e){
  if(e.target === menuOpen) {
    menuOpen.style.display = "none";
  }
});

})();