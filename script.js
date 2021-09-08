
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const nav = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click",()=>{
    nav.classList.toggle("active");
})
function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "View Details"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Hide Details"; 
      moreText.style.display = "inline";
    }
  }

  function myFunction1() {
    const dots1 = document.getElementById("dots1");
    const moreText1 = document.getElementById("more1");
    const btnText1 = document.getElementById("myBtn1");
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "View Details"; 
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Hide Details"; 
      moreText1.style.display = "inline";
    }
  }
  function myFunction2() {
    const dots2 = document.getElementById("dots2");
    const moreText2 = document.getElementById("more2");
    const btnText2 = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "View Details"; 
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "Hide Details"; 
      moreText2.style.display = "inline";
    }
  }
  function myFunction3() {
    const dots3 = document.getElementById("dots3");
    const moreText3 = document.getElementById("more3");
    const btnText3 = document.getElementById("myBtn3");
  
    if (dots3.style.display === "none") {
      dots3.style.display = "inline";
      btnText3.innerHTML = "View Details"; 
      moreText3.style.display = "none";
    } else {
      dots3.style.display = "none";
      btnText3.innerHTML = "Hide Details"; 
      moreText3.style.display = "inline";
    }
  }
  function myFunction4() {
    const dots4 = document.getElementById("dots4");
    const moreText4 = document.getElementById("more4");
    const btnText4 = document.getElementById("myBtn4");
  
    if (dots4.style.display === "none") {
      dots4.style.display = "inline";
      btnText4.innerHTML = "View Details"; 
      moreText4.style.display = "none";
    } else {
      dots4.style.display = "none";
      btnText4.innerHTML = "Hide Details"; 
      moreText4.style.display = "inline";
    }
  }