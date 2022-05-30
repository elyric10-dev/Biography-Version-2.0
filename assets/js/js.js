const image_container = document.querySelector('.image_container')
image_container.addEventListener('click', () => {
    const icons_container = document.querySelector('.icons_container')
    const clicked_menu = document.querySelector('.clicked_menu')
    const clicked_menu_container = document.querySelector('.clicked_menu_container')
    const main_master_container = document.querySelector('.main_master_container')


    image_container.classList.contains('active') ? image_container.classList.remove('active') : image_container.classList.add('active')
    icons_container.classList.contains('active') ? icons_container.classList.remove('active') : icons_container.classList.add('active')
    clicked_menu.classList.contains('active') ? clicked_menu.classList.remove('active') : clicked_menu.classList.add('active')
    clicked_menu_container.classList.contains('active') ? clicked_menu_container.classList.remove('active') : clicked_menu_container.classList.add('active')
    main_master_container.classList.contains('active') ? main_master_container.classList.remove('active') : main_master_container.classList.add('active')
})