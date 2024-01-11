import urlOne from "./images/penguin.jpg";
import urlTwo from "./images/penguini.jpg";
import urlThree from "./images/baby-penguin.jpg";
import urlFour from "./images/mama-penguin.jpeg";

import { buildNavDots } from "./navigation";

const URL_ARRAY = [urlOne, urlTwo, urlThree, urlFour];

export function buildImageSlide() {
  const slideSet = document.createElement("div");
  slideSet.setAttribute("id", "slide-set");
  slideSet.style.width = "800px";

  for (const url of URL_ARRAY) {
    const imgElement = new Image(200, 200);
    imgElement.setAttribute("src", url);

    slideSet.appendChild(imgElement);
  }

  const navDots = buildNavDots(URL_ARRAY.length);

  const frame = document.querySelector("#frame");
  frame.appendChild(slideSet);
  frame.appendChild(navDots);
}
