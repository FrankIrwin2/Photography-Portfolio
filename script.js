// Small animation for gallery hover
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    alert(`You clicked on: ${img.alt}`);
  });
});
