const myself = document.querySelectorAll('.artic_myself');
// 같은 이름의 클래스는 가장 상위에 있는 것만 가져오는 문제
// 전체에 적용 시켜야 한다.
// forEach를 사용하는 방법 - 해결
// jQuery를 사용하는 방법
let username = prompt('사용자 이름을 입력해주세요.');
alert(` ${username}님, 환영합니다! 응원의 메세지를 남겨주세요.`);

myself.forEach((i) => {
  const btnL = i.querySelector('.btn_lSlide');
  const btnR = i.querySelector('.btn_rSlide');
  const imgMe = i.querySelector('.list_img');
  const imgLenght = imgMe.children.length;
  let moveX = 0;

  imgMe.style.width = `${imgLenght * 600}px`
  btnR.addEventListener('click', () => {
    if(moveX > (imgLenght - 1) * (-600)) {
      moveX += -600;
    }
    imgMe.style.transform = `translate(${moveX}px, 0)`;
  })
  btnL.addEventListener('click', () => {
    if(moveX < 0) {
      moveX += 600;
    }
    imgMe.style.transform = `translate(${moveX}px, 0)`;
  })
})

// 좋아요
myself.forEach((i) => {
  const like = i.querySelector('.output_like');
  const btnHeart = i.querySelector('.btn_heart');
  let count = 0;
  
  btnHeart.addEventListener('click', () => {
    btnHeart.classList.toggle('on');
    if(btnHeart.className == 'btn_heart on') {
      like.textContent = ++count;
    } else if(btnHeart.className == 'btn_heart') {
      like.textContent = --count;
    }
  })
})



// 댓글
myself.forEach((i) => {
  const comment = i.querySelector('.list_comment');
  const btnNone = i.querySelector('.btn_none');
  const btnGoComment = i.querySelector('.btn_goComment');
  const btnComment = i.querySelector('.btn_comment');
  const inpComment = i.querySelector('.inp_comment');
  
  btnGoComment.addEventListener('click', () => {
    inpComment.focus();
  })
  
  btnNone.addEventListener('click', () => {
    comment.classList.toggle('on');
    if(comment.className == 'list_comment on') {
      comment.style.display = 'block';
    } else if(comment.className == 'list_comment') {
      comment.style.display = 'none';
    }
  })
  btnComment.addEventListener('click', () => {
    const liTag = document.createElement('li');
    liTag.setAttribute('class', 'txt_comment');
  
    if(inpComment.value == '') {
      alert('내용을 작성해주세요.');
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
})
