// const menuBtn = document.getElementsByClassName('toggle-btn')[0];
// const navMenu = document.getElementsByClassName('fm-nav-menu')[0];

// menuBtn.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
// });

$('.toggle-btn').click(function(){
    $('.fm-nav-menu').slideToggle(180);
  });