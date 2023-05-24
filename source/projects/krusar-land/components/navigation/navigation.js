const navigation = document.querySelector('.navigation');
const navToggle = navigation.querySelector('.navigation__toggle');
const navList = navigation.querySelector('.navigation__list');

navigation.classList.remove('navigation--nojs');

navToggle.addEventListener('click', () => {
  navList.style.transition = '300ms ease-out';
  navigation.classList.toggle('navigation--active');
});
