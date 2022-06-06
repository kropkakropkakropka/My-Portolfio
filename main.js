const buttons = document.querySelectorAll('.tab-btn');
const header = document.getElementById('header');

buttons.forEach(button => {
    button.addEventListener('click', e =>{
        buttonTarget = button.dataset.id;
        if (document.querySelectorAll('.tab-btn-active').length != 0) {
            document.querySelector('.tab-btn-active').classList.remove('tab-btn-active');
        }
        if(buttonTarget != 'introduction'){
            button.classList.add('tab-btn-active');   
        }


        current = document.querySelector('article.flex');
        current.classList.remove('flex');

        target = document.getElementById(buttonTarget);
        target.classList.add('flex');
    })
})