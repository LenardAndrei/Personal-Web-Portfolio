document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // Contact Form Handling
  // ==========================
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const to = "andreipanganiban82@gmail.com"; // <-- your email
      const name = document.getElementById("fullName").value.trim();
      const msg = document.getElementById("message").value.trim();

      if (!name || !msg) {
        alert("Please fill out all fields before sending.");
        return;
      }

      const subject = `Message from ${name}`;
      const body = `From: ${name}\n\n${msg}`;

      const gmailURL =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=" + encodeURIComponent(to) +
        "&su=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.open(gmailURL, "_blank");
    });
  }

  // ==========================
  // Theme Switcher
  // ==========================
  const btn = document.getElementById("theme-switch");
  const body = document.body;

  if (btn) {
    btn.addEventListener("click", () => {
      body.classList.toggle("darkmode");

      // Optional: persist theme in localStorage
      if (body.classList.contains("darkmode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Apply saved theme on load
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("darkmode");
  }

  // ==========================
  // Scroll Spy (Nav Active Link)
  // ==========================
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".header ul li a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // adjust for navbar height
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});
