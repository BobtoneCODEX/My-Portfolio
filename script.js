document.addEventListener("DOMContentLoaded", function () {

  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.style.display =
        (mobileMenu.style.display === 'none' || mobileMenu.style.display === '')
          ? 'block'
          : 'none';
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });

      if (mobileMenu && mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
      }

      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const link = document.querySelector('.nav-links a[href="' + href + '"]');
      if (link) link.classList.add('active');
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const back = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 90;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.id;

      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        const link = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (link) link.classList.add('active');
      }
    });

    if (back) {
      if (window.scrollY > 300) {
        back.style.opacity = '1';
        back.style.visibility = 'visible';
      } else {
        back.style.opacity = '0';
        back.style.visibility = 'hidden';
      }
    }
  });

  if (back) {
    back.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function revealOnScroll() {
    document.querySelectorAll('.fade-in').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add('reveal');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  window.handleContact = function (e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
      alert('Please fill name, email and message.');
      return;
    }

    alert('Thanks, ' + name + '! Your message was received (demo).');
    e.target.reset();
  };

  if (mobileMenu) {
    mobileMenu.style.display = 'none';
  }

});


document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.style.display =
        (mobileMenu.style.display === 'none' || mobileMenu.style.display === '')
          ? 'block'
          : 'none';
    });
  }
});

