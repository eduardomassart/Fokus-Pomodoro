const html = document.querySelector('html');

const botaoFoco = document.querySelector('.app__card-button--foco');
const botaoCurto = document.querySelector('.app__card-button--curto');
const botaoLongo = document.querySelector('.app__card-button--longo');
const tempoFoco = 1500;
const tempoCurto = 300;
const tempoLongo = 900;

const botoes = document.querySelectorAll('.app__card-button');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause ();
    }
})


botaoFoco.addEventListener('click', () => {
    alteraContexto('foco');
    botaoFoco.classList.add('active');
    tempoDecorridoEmSegundos = tempoFoco;
    mostrarTempo();
})

botaoCurto.addEventListener('click', () => {
    alteraContexto('descanso-curto');
    botaoCurto.classList.add('active');
    tempoDecorridoEmSegundos = tempoCurto;
    mostrarTempo();
})

botaoLongo.addEventListener('click', () => {
    alteraContexto('descanso-longo');
    botaoLongo.classList.add('active');
    tempoDecorridoEmSegundos = tempoLongo;
    mostrarTempo();
})

function alteraContexto(contexto) {
    botoes.forEach((botao)=> {botao.classList.remove('active')});

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;

        default:
            break;
    }
}