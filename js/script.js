document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  const prevButton = document.querySelector(".testimonial-prev");
  const nextButton = document.querySelector(".testimonial-next");

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      if (i === index) testimonial.classList.add("active");
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  prevButton.addEventListener("click", prevTestimonial);
  nextButton.addEventListener("click", nextTestimonial);

  showTestimonial(currentIndex);
});

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

function toggleMenu() {
  let navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    navLinks.style.height = navLinks.scrollHeight + "px";
  } else {
    navLinks.style.height = "0px";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let mascot = document.getElementById("mascot");
  let mascotImg = document.getElementById("mascot-img");

  if (!mascot || !mascotImg) {
    console.error("Mascot element not found!");
    return;
  }

  // Delay appearance (5 seconds)
  setTimeout(() => {
    mascot.style.display = "block"; // Ensure it's visible
    setTimeout(() => {
      mascot.classList.add("mascot-visible");
      mascotImg.style.animation = "bounce 1s infinite";
    }, 100); // Slight delay for smooth transition
  }, 5000); // 5000ms = 5 seconds delay

  // Rotate and wave on click
  mascot.addEventListener("click", function () {
    mascotImg.style.animation = "wave 0.8s";
    setTimeout(() => {
      mascotImg.style.animation = "bounce 1s infinite";
    }, 800);
  });
});
