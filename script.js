const facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=https://www.example.com";
const twitterShareUrl = "https://twitter.com/";
const instagramShareUrl = "https://www.instagram.com/";

const floatingButtons = document.querySelector("#floating-buttons");
const facebookButton = floatingButtons.querySelector(".facebook");
const twitterButton = floatingButtons.querySelector(".twitter");
const instagramButton = floatingButtons.querySelector(".instagram");

facebookButton.addEventListener("click", () => {
  window.open(facebookShareUrl, "_blank");
});

twitterButton.addEventListener("click", () => {
  window.open(twitterShareUrl, "_blank");
});

instagramButton.addEventListener("click", () => {
  window.open(instagramShareUrl, "_blank");
});

