// Disable scrolling on load
// window.addEventListener("load", function () {
//   document.body.style.overflow = "hidden";
// });

// Smooth scroll to content on button click
// var scrollButton = document.getElementById("explore_btn");
// scrollButton.addEventListener("click", function () {
//   var content = document.getElementById("statement_container");
//   content.scrollIntoView({ behavior: "smooth" });

  // Enable scrolling after scrolling is complete
//   setTimeout(function () {
//     document.body.style.overflow = "";
//   }, 1000); // Change this delay to match the duration of your scroll animation
// });

//play the landing page highlightreel when hovering over the logo
const logo = document.getElementById("landing_logo");
const video = document.getElementById("highlightreel");

logo.addEventListener("mouseover", () => {
  video.play();
  video.style.opacity = 1;
  video.style.display = 'block';
});

logo.addEventListener("mouseout", () => {
  video.pause();
  video.style.opacity = 0;
  video.style.display = 'block';
});

//making my teams accordion checkboxes behave like radio buttons
var checkboxes = document.getElementsByClassName('accordion-select');
for (var i=0; i<checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function() {
        if (this.checked) {
            for (var j=0; j<checkboxes.length; j++) {
                if (checkboxes[j] != this) {
                    checkboxes[j].checked = false;
                }
            }
        }
    });
}

// Select the image and all navigation links
const landingLogo = document.getElementById("landing_logo");
const navLinks = document.querySelectorAll(".navbar a");

// Add an event listener to the image for when it's hovered over
landingLogo.addEventListener("mouseover", function() {
  // Loop through all the navigation links
  for(let i = 0; i < navLinks.length; i++) {
    // Change the border, background, and color
    navLinks[i].style.border = "solid 1px #ffffff";
    navLinks[i].style.background = "transparent";
    navLinks[i].style.color = "#ffffff";
  }
});

// Add an event listener to the image for when it's not being hovered over
landingLogo.addEventListener("mouseout", function() {
  // Loop through all the navigation links
  for(let i = 0; i < navLinks.length; i++) {
    // Change the border, background, and color back to their original values
    navLinks[i].style.border = "solid 1px #005CA9";
    navLinks[i].style.background = "#ffffff";
    navLinks[i].style.color = "inherit";
  }
});

