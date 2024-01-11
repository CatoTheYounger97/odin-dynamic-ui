// nav buttons

const MAX_SHIFT = 600;
const MIN_SHIFT = 0;

export function buildNavButtons() {
  const navLeft = document.querySelector("#nav-left");
  const navRight = document.querySelector("#nav-right");

  navRight.addEventListener("click", shiftRight);
  navLeft.addEventListener("click", shiftLeft);

  setDotColor();
}

function shiftLeft() {
  const slide = document.querySelector("#slide-set");
  const slidePosition = Number(slide.style.right.slice(0, -2));

  if (slidePosition > MIN_SHIFT) {
    slide.style.right = `${slidePosition - 200}px`;
  }

  setDotColor();
}

function shiftRight() {
  const slide = document.querySelector("#slide-set");
  const slidePosition = Number(slide.style.right.slice(0, -2));

  if (slidePosition < MAX_SHIFT) {
    slide.style.right = `${slidePosition + 200}px`;
  }

  setDotColor();
}

// nav dots
export function buildNavDots(num) {
  const dotContainer = document.createElement("div");
  dotContainer.setAttribute("id", "nav-dots");

  for (let i = 0; i < num; ++i) {
    const dot = document.createElement("div");
    dot.classList.add("Dot");

    dot.addEventListener("click", () => {
      const slide = document.querySelector("#slide-set");

      slide.style.right = `${i * 200}px`;

      setDotColor();
    });

    dotContainer.append(dot);
  }
  return dotContainer;
}

function setDotColor() {
  const slide = document.querySelector("#slide-set");
  const slidePos = Number(slide.style.right.slice(0, -2)) / 200;

  const allDots = document.querySelectorAll(".Dot");

  for (let i = 0; i < allDots.length; ++i) {
    allDots[i].style.backgroundColor = "";
  }

  allDots[slidePos].style.backgroundColor = "red";
}
