const header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('change', window.scrollY >0);
})