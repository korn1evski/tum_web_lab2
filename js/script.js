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
