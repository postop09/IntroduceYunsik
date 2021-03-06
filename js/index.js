function btnClick() {
  const btnMe = document.querySelector('.btn_introduce');
  const btnBlog = document.querySelector('.btn_blog');
  const btn10000 = document.querySelector('.btn_10000hours');
  
  btnMe.addEventListener('click', () => {
    window.location.href = './introduce.html';
  })
  
  btnBlog.addEventListener('click', () => {
    window.open('https://watchwebs.tistory.com/');
  })

  btn10000.addEventListener('click', () => {
    window.open('https://postop09.github.io/10000hours/index.html');
  })
}
btnClick()

function slider() {
  const skills = document.querySelector('.artic_skills');
  const slide = skills.querySelector('.list_skills');
  let press = false;
  let startX = 0;
  let nowX = 0;
  let calcX = 0;
  
  slide.addEventListener('mousedown', (e) => {
    press = true;
    slide.style.cursor = 'grabbing';
    startX = e.offsetX;
  })
  slide.addEventListener('mouseup', () => {
    slide.style.cursor = 'default';
    press = false;
  })
  slide.addEventListener('mouseout', () => {
    slide.style.cursor = 'default';
    press = false;
  })
  slide.addEventListener('mousemove', (e) => {
    slide.style.cursor = 'grabbing'
    nowX = e.offsetX;
    
    if(!press) {
      return e.preventDefault()
    }
    calcX += (startX - nowX);
    slide.style.transform = `translate(-${calcX}px, 0)`;
    
    if(calcX < 0) {
      calcX = 0;
    } else if(calcX > 2400) {
      calcX = 2400;
      slide.style.transform = `translate(-2400px, 0)`;
    }
  })  
}
slider()

const main = document.querySelector('.index_main');
const btnMode = main.querySelector('.btn_mode');
const wrap = main.querySelector('.wrap_intro');
const header = document.querySelector('.index_header');
const nav = header.querySelector('.list_nav');
const fontWight = nav.querySelectorAll('.nav_hover');


btnMode.addEventListener('click', () => {
  header.classList.toggle('black');
  nav.classList.toggle('black');
  main.classList.toggle('black');
  wrap.classList.toggle('black');
  fontWight.forEach((i) => {
    i.classList.toggle('white');
  })
})