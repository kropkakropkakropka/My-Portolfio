const buttons = document.querySelectorAll('.tab-btn');
const header = document.getElementById('header');

// const url = `https://api.github.com/users/kropkakropkakropka/repos`;

// function fetchProjectsInfo(){
//     fetch(url)
//     .then(response => response.json())
//     .then(data =>{
//         data.forEach(repo => {
//             const repoUrl = repo.html_url
//             const repoName = repo.name;
//             const languagesUrl =  repo.languages_url;
//             fetch(languagesUrl)
//             .then(res => res.json())
//             .then(lan =>{
//                 console.log(lan);
//             })
//         })
//     })
//     .catch(error=>{
//         throw error;
//     })
// }

buttons.forEach(button => {
    button.addEventListener('click', e =>{
        buttonTarget = button.dataset.id;
        if (document.querySelectorAll('.tab-btn-active').length != 0) {
            document.querySelector('.tab-btn-active').classList.remove('tab-btn-active');
        }
        if(buttonTarget != 'introduction'){
            button.classList.add('tab-btn-active');   
        }
        
        current = document.querySelector('.flex');
        current.classList.remove('flex');

        target = document.getElementById(buttonTarget);
        target.classList.add('flex');
    })
})