document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.getElementById('nav-bar');

  menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
      menuToggle.classList.toggle('active'); // Agregado para cambiar el icono
  });
});