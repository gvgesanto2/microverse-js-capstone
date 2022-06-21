import '../styles/main.scss';

function myFunction(x) {
    x.classList.toggle("change");
  }
  
  var toggleStatus = 1;
  
  function toggleMenu() {
    if (toggleStatus === 1) {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
      toggleStatus = 0;
    } else if (toggleStatus === 0) {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.body.style.backgroundColor = "white";
      toggleStatus = 1;
    }
  }