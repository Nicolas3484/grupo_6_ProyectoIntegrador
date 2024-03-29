document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
      menuToggle.classList.toggle('active'); // Agregado para cambiar el icono
  });
});