document.querySelectorAll(".optional-image").forEach((image) => {
  const markMissing = () => image.classList.add("is-missing");

  if (image.complete && image.naturalWidth === 0) {
    markMissing();
    return;
  }

  image.addEventListener("error", markMissing, { once: true });
});
