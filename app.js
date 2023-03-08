const cards = document.querySelectorAll('.card');
const music = document.querySelector('#playAudio');

cards.forEach((card) => {
    card.addEventListener('click',() => {
        if(music) {
            music.play();
        }
        console.log(card);
        card.classList.toggle('active');
        card.classList.toggle('unactive');
    });
});



