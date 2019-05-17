window.onload = function () { 
  const btn = document.querySelector('img');
  const menu = document.querySelector('menu');
  const close = document.querySelector('.menu__awesome');

  btn.addEventListener('click', () => {
    menu.style.display = 'block';
    document.body.style.overflowY = 'hidden';
    close.style.display = 'block';
  });
  
  close.addEventListener('click', () => {
    menu.style.display = 'none';
    document.body.style.overflowY = 'scroll';
    close.style.display = 'none';
  });
}