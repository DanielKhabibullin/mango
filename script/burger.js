"use strict";
document.addEventListener("DOMContentLoaded", function() {
  //burger
  const burger = document.querySelector('.burger');
  const navigation = document.querySelectorAll('.navigation')[0];
  // const headerWhiteBefore = document.querySelector('.header_white_before');
  if (burger) {
    burger.addEventListener('click', () => {
      document.body.classList.toggle('_lock');
      burger.classList.toggle('burger_active');
      navigation.classList.toggle('navigation_active');
      // headerWhiteBefore.classList.toggle('visible');
      // headerWhiteBefore.classList.toggle('hidden');
    });
  }
  // scroll and close burger after clicking navigation buttons
  const navLinks = document.querySelectorAll('.navigation__link[data-goto]');
  const allNavLinks = document.querySelectorAll('.navigation__link');

  navLinks.forEach(navLink => {
    navLink.addEventListener('click', onNavLinkClick);
  });

  function onNavLinkClick(e) {
    const navLink = e.target;
    if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
      const gotoBlock = document.querySelector(navLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight;

      allNavLinks.forEach(allNavLink => {
        allNavLink.classList.remove('navigation__link_active');
      })
      navLink.classList.add('navigation__link_active');
      if (burger.classList.contains('burger_active')) {
        burger.classList.remove('burger_active');
        document.body.classList.remove('_lock');
        navigation.classList.remove('navigation_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }

  // Showing/hiding white header on scroll
  // const headerWhite = document.querySelector('.header_white');
  // const headerTransparent = document.querySelector('.header_transparent');
  
  // window.addEventListener('scroll', function() {
  //   const scrollPosition = window.scrollY;
  //   if (window.innerWidth > 1023) {
  //     if (scrollPosition > 0) {
  //       headerWhite.classList.remove('hidden');
  //       headerWhite.classList.add('visible');
  //       headerTransparent.classList.remove('visible');
  //       headerTransparent.classList.add('hidden');
  //     } else {
  //       headerWhite.classList.remove('visible');
  //       headerWhite.classList.add('hidden');
  //       headerTransparent.classList.remove('hidden');
  //       headerTransparent.classList.add('visible');
  //     }
  //   } else {
  //     // Reset styles for larger screens
  //     headerWhite.classList.remove('visible', 'hidden');
  //     headerTransparent.classList.remove('visible', 'hidden');
  //   }
  // });
});
