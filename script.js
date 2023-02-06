const facebookShareUrl = "https://www.facebook.com/";
const twitterShareUrl = "https://twitter.com/";
const instagramShareUrl = "https://www.instagram.com/";

const floatingButtons = document.querySelector("#floating-buttons");
const facebookButton = floatingButtons.querySelector(".facebook");
const twitterButton = floatingButtons.querySelector(".twitter");
const instagramButton = floatingButtons.querySelector(".instagram");

facebookButton.addEventListener("click", () => {
  window.open(facebookShareUrl, "https://www.facebook.com/");
});

twitterButton.addEventListener("click", () => {
  window.open(twitterShareUrl, "https://twitter.com/");
});

instagramButton.addEventListener("click", () => {
  window.open(instagramShareUrl, "https://www.instagram.com/");
});

