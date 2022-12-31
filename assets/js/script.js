// Events
document.body.addEventListener('keyup', (e) => {
    playSound(e.code.toLocaleLowerCase());
    if(e.keyCode === 13) return tocar();
});

document.querySelector('.composer .dropSong').addEventListener('click', tocar);

document.querySelector('.composer .clearInput').addEventListener('click', () => {
    let input = document.querySelector('#input');
    input.value = '';
    input.focus();
});

// Functions
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key=${sound}]`)

    if(audioElement){
        // Zerando o áudio para ele n ter que esperar um som terminar de executar pra iniciar outro
        audioElement.currentTime = 0
        // Dando play
        audioElement.play();
    };

    if(keyElement){
        keyElement.classList.add('active');

        // Após 300ms remover a class "active"
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300)
    }
};

function playComposition(song){
    let awaitSong = 0

    // Dando um intervalo de "x"ms para reproduzir cada som
    for(let songItem of song){
        setTimeout(() => {
            playSound(`key${songItem}`);

        },awaitSong);
        awaitSong += 300;
    }
};

function tocar() {
    let song = document.querySelector('#input').value;

    if(song) {
        // Criando um array e separando cada letra;
        let songArray = song.split('');
        // console.log(songArray);
        playComposition(songArray);
    }
}