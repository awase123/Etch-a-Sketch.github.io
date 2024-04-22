document.addEventListener("DOMContentLoaded", () => {
  const div = document.querySelector(".container");
  const button = document.querySelector("#btn1");

  function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  }

  function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  }

  for (let i = 0; i < 256; i++) {
    newDiv = document.createElement("div");
    div.appendChild(newDiv);
    newDiv.classList.add("grid-item");
  }

  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.textContent = randomLetter();
      item.style.backgroundColor = randomColor();
    });
  });
});
