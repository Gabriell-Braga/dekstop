function slideRight(event) {
    slide = 0;

    if (window.innerWidth <= 768) {
        slide = 300;
    }else{
        slide = 610;
    }
    event.preventDefault();
    const slideContainer = event.target.closest('.slide-container').querySelector('.slide');
    slideContainer.scrollLeft += slide;
}

function slideLeft(event) {
    slide = 0;

    if (window.innerWidth <= 768) {
        slide = 300;
    }else{
        slide = 610;
    }
    
    event.preventDefault();
    const slideContainer = event.target.closest('.slide-container').querySelector('.slide');
    slideContainer.scrollLeft -= slide;
}

function list(event){
    event.preventDefault();
    const listButton = event.target.closest('button');
    const gridButton = listButton.nextElementSibling;
    const grid = event.target.closest('.container').querySelector('.grid');
    grid.classList.add('list');
    listButton.classList.add('active');
    gridButton.classList.remove('active');
}

function grid(event){
    event.preventDefault();
    const gridButton = event.target.closest('button');
    const listButton = gridButton.previousElementSibling;
    const grid = event.target.closest('.container').querySelector('.grid');
    grid.classList.remove('list');
    gridButton.classList.add('active');
    listButton.classList.remove('active');
}

function toggleMenu(event){
    event.preventDefault();
    const menuToggle = event.target.closest('.menu-toggle');
    const bars = menuToggle.querySelector('.fa-bars');
    const x = bars.nextElementSibling;
    const menu = menuToggle.closest('nav').querySelector('.menu-items');
    menu.classList.toggle('active');
    bars.classList.toggle('active');
    x.classList.toggle('active');
}