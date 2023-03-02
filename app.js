const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('click',()=> {
        card.classList.toggle('active');
        card.classList.toggle('unactive');
    })
})

const mp3 = document.querySelector('#playAudio');
if(mp3) {
    mp3.play();
}