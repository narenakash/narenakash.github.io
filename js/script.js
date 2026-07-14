/* narenakash.com — theme toggle, mobile nav, news expander. No dependencies. */
(function () {
  'use strict';

  // Theme toggle (initial theme is set inline in <head> to avoid a flash)
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Mobile navigation
  var burger = document.querySelector('.nav-burger');
  var links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // News expander
  var newsToggle = document.querySelector('.news-toggle');
  var newsMore = document.getElementById('news-more');
  if (newsToggle && newsMore) {
    newsToggle.addEventListener('click', function () {
      var open = newsMore.classList.toggle('open');
      newsToggle.classList.toggle('open', open);
      newsToggle.querySelector('span').textContent = open
        ? 'Show fewer updates'
        : newsToggle.getAttribute('data-label');
    });
  }
})();
