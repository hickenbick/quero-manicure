const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
const gallery = document.querySelector(".gallery")

controls.forEach(control => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left");
    const photoW = items[currentItem].clientWidth;

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= (maxItems -1)) {
      currentItem -= 1;
    }

    if (currentItem < 0) {
      currentItem += 1;
    }

    items.forEach(item => item.classList.remove("current-item"));

    if (isLeft) {
      gallery.scrollBy({
        left: -photoW,
        behavior: 'smooth'
      });
    } else {
      gallery.scrollBy({
        left: photoW,
        behavior: 'smooth'
      });
    }
  })
});
