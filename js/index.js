// Menu Responsive

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// Auto Connter Sectoin
jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});