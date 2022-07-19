const popup = document.querySelector('.chat-box');
const chatBtn = document.querySelector('.chat-btn');



chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})