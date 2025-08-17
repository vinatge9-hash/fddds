// Main client-side JS for small interactions
(function () {
  // Mobile menu toggle
  var btns = document.querySelectorAll('#mobileMenuButton');
  var mobileMenu = document.getElementById('mobileMenu');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!mobileMenu) return;
      mobileMenu.classList.toggle('hidden');
    });
  });

  // Contact form handling (client-side only)
  var form = document.getElementById('contactForm');
  if (form) {
    var status = document.getElementById('formStatus');
    var clearBtn = document.getElementById('clearBtn');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Basic client-side validation
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all fields before submitting.');
        return;
      }

      // Simulate successful submission
      status.classList.remove('hidden');
      form.reset();

      // Hide the success message after a few seconds
      setTimeout(function () {
        status.classList.add('hidden');
      }, 6000);
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        form.reset();
      });
    }
  }
})();
