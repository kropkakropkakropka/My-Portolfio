const buttons = document.querySelectorAll('.tab-btn');
const header = document.getElementById('header');
const imagePreviews = document.querySelectorAll('.img-preview')
const projectsSection = document.querySelector('.work');

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

imagePreviews.forEach(img => {
    img.addEventListener('click', ()=>{
        console.log(img);
        img.classList.add('zoom');
        img.classList.remove('img-preview');
        var activeImg = img;
        activeImg.addEventListener('click', ()=>{
            activeImg.classList.remove('zoom');
            img.classList.add('img-preview');
        })
    })
})