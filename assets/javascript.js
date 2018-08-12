function scrollIt(element) {
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

const btns = document.querySelectorAll('.js-btn');
const sections = document.querySelectorAll('.js-section');

btns[0].addEventListener('click', () => {
  scrollIt(sections[0]);
});
btns[0].addEventListener('touchstart', () => {
  scrollIt(sections[0]);
});

btns[1].addEventListener('click', () => {
  scrollIt(sections[1]);
});
btns[1].addEventListener('touchstart', () => {
  scrollIt(sections[1]);
});

btns[2].addEventListener('click', () => {
  scrollIt(sections[2]);
});

btns[2].addEventListener('touchstart', () => {
  scrollIt(sections[2]);
});

/*btns[3].addEventListener('click', () => {
  scrollIt(sections[3]);
});*/
