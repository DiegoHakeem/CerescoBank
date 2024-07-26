const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const carousel = document.getElementById('item-list');
const itemWidth = 400
const padding = 20
var selectDot = 0
const dotList = document.querySelectorAll('.dot')

prev.addEventListener('click', () => {
  carousel.scrollLeft -= itemWidth + padding;
  selectDot -= 1;
  changeDot()
});

next.addEventListener('click', () => {
  carousel.scrollLeft += itemWidth + padding;
  selectDot += 1
  changeDot()
});

function changeDot() {
  if (selectDot > dotList.length - 1) {
    selectDot = dotList.length - 1;
  } else if (selectDot < 0) {
    selectDot = 0;
  }

  for (let i = 0; i < dotList.length; i++) {
    if (selectDot === i) {
      dotList[i].setAttribute('src', 'images/dot-black.png')
    }

    else {
      dotList[i].setAttribute('src', 'images/dot-grey.png')
    }
  }
}
