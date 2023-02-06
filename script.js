const facebookButton = document.querySelector('.fa-facebook');
const instagramButton = document.querySelector('.fa-instagram');
const twitterButton = document.querySelector('.fa-twitter');

facebookButton.addEventListener('click', function() {
  window.location.href = 'https://www.facebook.com/';
});

instagramButton.addEventListener('click', function() {
  window.location.href = 'https://www.instagram.com/';
});

twitterButton.addEventListener('click', function() {
  window.location.href = 'https://twitter.com/';
});

