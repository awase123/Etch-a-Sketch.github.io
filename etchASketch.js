document.addEventListener("DOMContentLoaded", () => {
  const div = document.querySelector(".container");
  const button = document.querySelector("#btn1");

  button.addEventListener("click", () => {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
    amountOfSquares();
  });

  function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  }

  function createSquare() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    newDiv.style.backgroundColor = randomColor();
    div.appendChild(newDiv);

    newDiv.addEventListener("mouseenter", () => {
      newDiv.style.backgroundColor = randomColor();
    });
  }

  function amountOfSquares() {
    let squares = prompt("Input the number of squares you want:");
    if (squares > 100) {
      alert("Input is too high!");
      amountOfSquares();
    }
    for (let i = 0; i < squares; i++) {
      createSquare();
    }
  }
});
