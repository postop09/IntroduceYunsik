const btn = document.querySelector('.btn_introduce');

btn.addEventListener('click', () => {
  window.location.href = './introduce.html'
})
function slider() {
  const skills = document.querySelector('.artic_skills');
  const slide = skills.querySelector('.list_skills');
  let startX = 0;
  let nowX = 0;
  let calcX = 0;
  let press = false;
  
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
    slide.style.transform = `translate(-${calcX}px, 0)`
    
    if(calcX < 0) {
      calcX = 0;
    } else if(calcX > 2400) {
      calcX = 2400;
      slide.style.transform = `translate(-2400px, 0)`
    }
  })  
}
slider()


// let slider = document.querySelector(".slider")
// let innerSlider = document.querySelector(".slider-inner")
// let pressed = false
// let startx
// let x

// slider.addEventListener("mousedown", e => {
//   pressed = true
//   startx = e.offsetX - innerSlider.offsetLeft
//   slider.style.cursor = "grabbing"
// })
// slider.addEventListener("mouseenter", () => {
//   slider.style.cursor = "grab"
// })

// slider.addEventListener("mouseup", () => {
//   slider.style.cursor = "grab"
// })

// window.addEventListener("mouseup", () => {
//   pressed = false
// })
// function checkboundary() {
//   let outer = slider.getBoundingClientRect()
//   let inner = innerSlider.getBoundingClientRect()

//   if (parseInt(innerSlider.style.left) > 0) {
//     innerSlider.style.left = "0px"
//   } else if (inner.right < outer.right) {
//     innerSlider.style.left = `-${inner.width - outer.width}px`
//   }
// }
// slider.addEventListener("mousemove", e => {
//   if (!pressed) return
//   e.preventDefault()
//   x = e.offsetX

//   innerSlider.style.left = `${x - startx}px`
//   checkboundary()
// })