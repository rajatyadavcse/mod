
function myFunction(divId) {
  if (document.getElementById(divId).className === "topnav") {
    document.getElementById(divId).className += " responsive";
  } else {
    document.getElementById(divId).className = "topnav";
  }
}
