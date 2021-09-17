
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const nav = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click",()=>{
    nav.classList.toggle("active");
})

function myFunction(id){
  const details = document.getElementById(id);
  if (details.style.display === "none"){
    details.style.display = "inline"
  } else {
    details.style.display = "none"
  }
}

  