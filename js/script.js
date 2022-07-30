window.onscroll = function() {scrollShandow()};
 
function scrollShandow() {
  document.getElementById("navbar").style.transition = "0.6s ease-in-out";
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.boxShadow = "0px 3px 10px rgba(0, 0, 0, 0.15)" 
  } else{
    document.getElementById("navbar").style.boxShadow = "none"
  }
}
