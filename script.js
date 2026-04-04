const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {

  dropdown.addEventListener('mouseenter', () => {
    if (window.innerWidth > 1000) {
      dropdown.classList.add('active');
    }
  });

  dropdown.addEventListener('mouseleave', () => {
    if (window.innerWidth > 1000) {
      dropdown.classList.remove('active');
    }
  });

  const link = dropdown.querySelector('a');

  link.addEventListener('click', function (e) {
    if (window.innerWidth <= 1000) {
      e.preventDefault();
      dropdown.classList.toggle('active');
    }
  });

});