// Apply a dark mode filter to the entire page
document.body.style.filter = "invert(1) hue-rotate(180deg)";

// Invert images back to normal (since the filter would invert them)
const media = document.querySelectorAll("img, picture, video, iframe");
media.forEach((element) => {
  element.style.filter = "invert(1) hue-rotate(180deg)";
});
