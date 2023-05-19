const pageHeader = document.querySelector('.page-header');

pageHeader.classList.remove('page-header--nojs');

window.addEventListener('scroll', () => {
  pageHeader.style.transition = '200ms ease-out';
  if (document.documentElement.scrollTop > 50) {
    pageHeader.classList.add('page-header--scrolled');
  } else {
    pageHeader.classList.remove('page-header--scrolled');
  }
});
