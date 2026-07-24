document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
  }
  // Mobile: tap on "BPO360™" opens submenu instead of navigating away
  var dropdownParent = document.querySelector('.has-dropdown > .nav-link');
  var dropdownWrap = document.querySelector('.has-dropdown');
  if(dropdownParent && dropdownWrap){
    dropdownParent.addEventListener('click', function(e){
      if(window.innerWidth <= 960){
        e.preventDefault();
        dropdownWrap.classList.toggle('open');
      }
    });
  }
  // Footer year
  var y = document.querySelector('#footYear');
  if(y){ y.textContent = new Date().getFullYear(); }
});
