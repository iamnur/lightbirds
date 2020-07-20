$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

// show date
function showDate() {
  var time = document.getElementById("time");
  time.innerHTML = Date();
}

//validate form frontend charctrs only not security or hack prtn that needs a backend code

function validateForm() {
  var firstname = document.forms["contact"]["firstname"].value;
  var email = document.forms["contact"]["email"].value;
  var subject = document.forms["contact"]["subject"].value;

  if (firstname == null || firstname == "") {
    alert("Name is required");
    return false;
  }
  if (email == null || email == "") {
    alert("Email is required");
    return false;
  }
  if (subject == null || subject == "") {
    alert("Message is required");
    return false;
  }
}
