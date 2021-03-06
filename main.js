const buttons = document.querySelectorAll('.tab-btn');
const header = document.getElementById('header');
const imagePreviews = document.querySelectorAll('.img-preview')
const projectsSection = document.querySelector('.work');
const navButton = document.getElementById('nav-button');
const menu = document.getElementById('toggl-nav');

navButton.addEventListener('click', ()=>{
    menu.classList.toggle('active');
})

buttons.forEach(button => {
    button.addEventListener('click', e =>{
        let buttonTarget = button.dataset.id;
        if (document.querySelectorAll('.tab-btn-active').length != 0) {
            document.querySelector('.tab-btn-active').classList.remove('tab-btn-active');
        }
        if(buttonTarget != 'introduction'){
            button.classList.add('tab-btn-active');   
        }
        
        let current = document.querySelector('.flex');
        current.classList.remove('flex');

        let target = document.getElementById(buttonTarget);
        target.classList.add('flex');
    })
})

// imagePreviews.forEach(img => {
//     img.addEventListener('click', ()=>{
//         img.classList.toggle('zoom');
//         img.classList.toggle('img-preview');
//     })
// })