const menuItem = document.querySelectorAll('.menu-item');


const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active');
    })
}
menuItem.forEach(item => {
    item, addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active'); 
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').
                style.display = 'none';
        }
        else {
            document.querySelector('.notifications-popup').
                style.display = 'block';
            document.querySelector('#notifications.')
            
        }
       
    })
})