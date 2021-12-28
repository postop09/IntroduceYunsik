const myself = document.querySelector('.artic_myself');
const btnHeart = myself.querySelector('.btn_heart');
const btnGoComment = myself.querySelector('.btn_goComment');
const secComment = myself.querySelector('.sec_comment');

function heart() {
  const like = myself.querySelector('.output_like') 
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

function comment() {
  const comment = secComment.querySelector('.list_comment');
  const btnNone = secComment.querySelector('.btn_none');
  const inpComment = myself.querySelector('.inp_comment');
  const btnComment = myself.querySelector('.btn_comment');

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
// 어려운 부분
  btnComment.addEventListener('click', () => {
    comment.innerHTML = `
    <li class="txt_comment">
      조윤식
      <p>${inpComment.value}</p>
    </li>
    `
  })
}
comment()

