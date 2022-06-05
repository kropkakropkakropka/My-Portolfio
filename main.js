const buttons = document.querySelectorAll('.tab-btn');
const header = document.getElementById('header');

buttons.forEach(button => {
    button.addEventListener('click', e =>{
        buttonTarget = button.dataset.id;
        if(buttonTarget !== 'introduction'){
            // if(header.classList.contains('none')){header.classList.remove('none');}
            header.classList.remove('none');
        }
        else{
            // if(!header.classList.contains('none')){header.classList.add('none');}
            header.classList.add('none');
        }

        current = document.querySelector('.active');
        current.classList.remove('active');

        target = document.getElementById(buttonTarget);
        target.classList.add('active');
    })
})