const myself = document.querySelector('.artic_myself');
const user = myself.querySelector('.txt_name')
const secComment = myself.querySelector('.sec_comment');
// 같은 이름의 클래스는 가장 상위에 있는 것만 가져오는 문제
// 전체에 적용 시켜야 한다.
// forEach를 사용하는 방법
// jQuery를 사용하는 방법
let username = prompt('사용자 이름을 입력해주세요.')

function imgSlide() {
  const btnL = myself.querySelector('.btn_lSlide');
  const btnR = myself.querySelector('.btn_rSlide');
  const imgMe = myself.querySelector('.list_img');
  const imgLenght = imgMe.children.length
  let moveX = 0;

  // 예외처리 : 이미지가 없는 곳으로 넘어가면 안됌.
  imgMe.style.width = `${imgLenght} * 600px`
  btnR.addEventListener('click', () => {
    if(moveX > (imgLenght - 1) * (-600)) {
      moveX += -600;
    }
    imgMe.style.transform = `translate(${moveX}px, 0)`
  })
  btnL.addEventListener('click', () => {
    if(moveX < 0) {
      moveX += 600;
    }
    imgMe.style.transform = `translate(${moveX}px, 0)`
  })
}
imgSlide()

// 좋아요
function heart() {
  const like = myself.querySelector('.output_like') 
  const btnHeart = myself.querySelector('.btn_heart');
  let count = 0;

  btnHeart.addEventListener('click', () => {
    btnHeart.classList.toggle('on');
    if(btnHeart.className == 'btn_heart on') {
      like.textContent = ++count
    } else if(btnHeart.className == 'btn_heart') {
      like.textContent = --count
    }
  })
}
heart()

// 댓글
function comment() {
  const comment = secComment.querySelector('.list_comment');
  const btnNone = secComment.querySelector('.btn_none');
  const btnGoComment = myself.querySelector('.btn_goComment');
  const btnComment = myself.querySelector('.btn_comment');
  const inpComment = myself.querySelector('.inp_comment');

  btnGoComment.addEventListener('click', () => {
    comment.classList.add('on');
    scrollTo({top:510, left: 0, behavior: 'smooth'});
    setTimeout(() => {
      inpComment.focus();
    }, 200);
  })
  
  btnNone.addEventListener('click', () => {
    comment.classList.toggle('on');
    if(comment.className == 'list_comment on') {
      comment.style.display = 'block';
    } else if(comment.className == 'list_comment') {
      comment.style.display = 'none';
    }
  })
// 어려운 부분 : 새로운 영역이 추가되지 않고 글이 수정되는 문제
// 요소를 생성해서 붙여 넣어야 한다?
  btnComment.addEventListener('click', () => {
    const liTag = document.createElement('li');
    liTag.setAttribute('class', 'txt_comment');

    // 예외처리 : 아무것도 입력이 안되면 댓글 작성x
    if(inpComment.value == '') {
      alert('내용을 작성해주세요.')
      liTag.innerHTML = '';
    } else if(inpComment.value != '') {
      liTag.innerHTML = `
      ${username}
      <p>${inpComment.value}</p>
      `;
      comment.appendChild(liTag);
    }
    inpComment.value = '';
  })
}
comment()
