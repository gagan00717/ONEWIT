
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotifiaction = document.querySelector('#message-notification');
const messageS = document.querySelector('.messageS');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active'); 
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').
                style.display = 'none';
        }
        else {
            document.querySelector('.notifications-popup').
                style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
           
            
        }
       
    })
})
const searchMessage = () => {
    const val = messageSearch.ariaValueMax.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        }
        else {
            chat.style.display = 'none';
        }
    })
}



messageSearch.addEventListener('keyup',searchMessage)

messagesNotifiaction.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifiaction.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';

    }, 2000);
})


const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }

}


themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);















 