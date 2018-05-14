var header = document.querySelector(".header_holder");
var sticky = header.offsetTop;

// Back to top function
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
  headerDown();
  //   background();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function headerDown() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.classList.add("header_down");
  } else {
    header.classList.remove("header_down");
  }
}

function linkChange() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
