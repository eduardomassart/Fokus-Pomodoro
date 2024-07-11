const startPauseBotao = document.querySelector('#start-pause');
const startPauseSpan = document.querySelector('#start-pause span');
const startPauseIcon = document.querySelector('.app__card-primary-butto-icon');

let tempoDecorridoEmSegundos = tempoFoco;
let LembrançaTempoContexto = tempoFoco;
let intervaloId = null;

const audioPlay = new Audio('./sons/play.wav');
const audioPause = new Audio('./sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3');

const timer = document.querySelector('#timer');

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        audioTempoFinalizado.play();
        alert('Tempo finalizado');
        zerar();
        redefinirTimer();
        const focoAtivo = html.getAttribute('data-contexto') == 'foco';
        if (focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado');
            document.dispatchEvent(evento);
        }
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
}

function redefinirTimer () {
    tempoDecorridoEmSegundos = LembrançaTempoContexto;
    mostrarTempo();
    startPauseSpan.textContent = 'Começar';
    startPauseIcon.setAttribute('src', './imagens/play_arrow.png')    
}

function iniciarOuPausar() {
    if (intervaloId) {
        zerar();
        startPauseSpan.textContent = 'Começar';
        startPauseIcon.setAttribute('src', './imagens/play_arrow.png')
        audioPause.play();
        return;
    }

    startPauseSpan.textContent = 'Pausar';
    startPauseIcon.setAttribute('src', './imagens/pause.png')
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
}

startPauseBotao.addEventListener('click', iniciarOuPausar);

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', { minute: '2-digit', second: '2-digit' });
    timer.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();
