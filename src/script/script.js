window.onload = function () { 
  const btn = document.querySelector('img');
  const menu = document.querySelector('menu');
  const close = document.querySelector('.menu__awesome');
  let flag = false;

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

  window.addEventListener('resize', () => {
    const width = document.body.clientWidth;
    console.log(width);

    if (width > 769) {
    menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
    

  });
}