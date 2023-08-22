window.addEventListener("resize", updateImages);

function updateImages() {
  const btn = 0;
  const inc = 0;
  let margin = 0;
  let containerMargin = 0;
  let containerMd = 3 * 16 * 2;
  let containerLg = 13 * 16 * 2;

  const carousel = document.getElementsByClassName("carousel_items");
  let itemDisplay = 0;

  if (screen.width > 990) {
    containerMargin = containerLg;
    itemDisplay = document
      .getElementById("img-carousel")
      .getAttribute("item-display-d");
    margin = itemDisplay * 5;
  } else if (screen.width > 700 && screen.width < 990) {
    containerMargin = containerMd;
    itemDisplay = document
      .getElementById("img-carousel")
      .getAttribute("item-display-t");
    margin = itemDisplay * 6.8;
  } else if (screen.width < 700) {
    containerMargin = containerMd;
    itemDisplay = document
      .getElementById("img-carousel")
      .getAttribute("item-display-m");
    margin = itemDisplay * 30;
  }
  console.log(itemDisplay);

  let items = document.getElementsByClassName("img_item");
  let itemsLeft = items.length % itemDisplay;
  let itemsSlide = Math.floor(items.length / itemDisplay) - 1;

  for (let i = 0; i < items.length; i++) {
    items[i].style.width =
      (screen.width - containerMargin) / itemDisplay - margin + "px";
    items[i].style.margin = margin / 2 + "px";
  }

  console.log(itemsLeft);
}

updateImages();
