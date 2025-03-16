// 🔹 Adiciona a API do YouTube dinamicamente
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var isPlaying = false;

// 🔹 Função chamada quando a API do YouTube estiver pronta
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'NS9xi3JwJqc', // 🔹 Troque pelo ID do seu vídeo 🔹
        playerVars: {
            autoplay: 0, // Evita bloqueios do navegador
            controls: 0, // Remove controles visíveis
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            playlist: 'NS9xi3JwJqc' // 🔹 Repete a música 🔹
        },
    });
}

// 🔹 Play/Pause do áudio do YouTube
document.getElementById("playPauseButton").addEventListener("click", function () {
    if (player) {
        if (isPlaying) {
            player.pauseVideo();
            this.innerText = "▶️ Play";
        } else {
            player.playVideo();
            this.innerText = "⏸ Pause";
        }
        isPlaying = !isPlaying;
    }
});

// 🔹 Função para calcular o tempo de relacionamento
function calcularTempo() {
    const dataInicio = new Date('2018-07-12T00:00:00');
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById('dataInicioTexto').innerText = dataInicio.toLocaleDateString('pt-BR');
    document.getElementById('anos').innerHTML = `${anos}<span class="countdown-label"> anos</span>`;
    document.getElementById('meses').innerHTML = `${meses}<span class="countdown-label"> meses</span>`;
    document.getElementById('dias').innerHTML = `${dias}<span class="countdown-label"> dias</span>`;
    document.getElementById('horas').innerHTML = `${String(horas).padStart(2, '0')}<span class="countdown-label"> horas</span>`;
    document.getElementById('minutos').innerHTML = `${String(minutos).padStart(2, '0')}<span class="countdown-label"> mins</span>`;
    document.getElementById('segundos').innerHTML = `${String(segundos).padStart(2, '0')}<span class="countdown-label"> segs</span>`;
}

// 🔹 Atualiza o contador de tempo a cada segundo
setInterval(calcularTempo, 1000);
calcularTempo();

// 🔹 Efeito de corações ao clicar no botão
document.getElementById("loveButton").addEventListener("click", function () {
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    // Posição aleatória na tela
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;

    // Tamanho aleatório
    const size = Math.random() * 30 + 10 + "px"; 
    heart.style.fontSize = size;

    // Animação personalizada
    const animationDuration = Math.random() * 3 + 2;
    heart.style.animation = `fall ${animationDuration}s linear forwards`;

    // Adiciona o coração ao body
    document.body.appendChild(heart);

    // Remove após a animação
    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000);
}

// 🔹 Efeito de digitação para a mensagem romântica
const messageText = "Nosso amor é como uma chama que nunca apaga. Obrigado por trazer calor, luz e conforto aos meus dias.";
let index = 0;

function typeMessage() {
    if (index < messageText.length) {
        document.getElementById("message").innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typeMessage, 50);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeMessage();
});
