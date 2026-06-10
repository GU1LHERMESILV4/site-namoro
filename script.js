// ======================================
// SILVIA ❤️ NENECO
// SCRIPT PRINCIPAL
// ======================================

// ---------- ELEMENTOS ----------

const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("music");
const mainSite = document.getElementById("main-site");
const welcomeScreen = document.getElementById("welcome-screen");

const counter = document.getElementById("counter");

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeImage = document.getElementById("closeImage");

const galleryImages =
document.querySelectorAll(".gallery-img");

const openLetter =
document.getElementById("openLetter");

const closeLetter =
document.getElementById("closeLetter");

const letterModal =
document.getElementById("letterModal");

const surpriseBtn =
document.getElementById("surpriseBtn");

const surpriseModal =
document.getElementById("surpriseModal");

const closeSurprise =
document.getElementById("closeSurprise");

// ======================================
// DATA DO NAMORO
// ======================================

const namoroDate =
new Date("2025-06-18T00:00:00");

// ======================================
// ENTRAR NO SITE
// ======================================

enterBtn.addEventListener("click", () => {


welcomeScreen.style.display = "none";

mainSite.style.display = "block";

music.play().catch(() => {
    console.log(
        "Navegador bloqueou autoplay."
    );
});

window.scrollTo({
    top: 0,
    behavior: "smooth"
});


});

// ======================================
// CONTADOR
// ======================================

function updateCounter() {


const now = new Date();

const diff = now - namoroDate;

const days =
    Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

const hours =
    Math.floor(
        (diff / (1000 * 60 * 60)) % 24
    );

const minutes =
    Math.floor(
        (diff / (1000 * 60)) % 60
    );

const seconds =
    Math.floor(
        (diff / 1000) % 60
    );

counter.innerHTML = `
    💙 ${days} dias<br>
    💙 ${hours} horas<br>
    💙 ${minutes} minutos<br>
    💙 ${seconds} segundos
`;


}

setInterval(updateCounter, 1000);

updateCounter();

// ======================================
// GALERIA FULLSCREEN
// ======================================

galleryImages.forEach(img => {


img.addEventListener("click", () => {

    imageModal.style.display = "flex";

    modalImage.src = img.src;

});


});

closeImage.addEventListener("click", () => {


imageModal.style.display = "none";


});

imageModal.addEventListener("click", e => {


if(e.target === imageModal){

    imageModal.style.display = "none";

}


});

// ======================================
// CARTA SECRETA
// ======================================

openLetter.addEventListener("click", () => {


letterModal.style.display = "flex";


});

closeLetter.addEventListener("click", () => {


letterModal.style.display = "none";


});

letterModal.addEventListener("click", e => {


if(e.target === letterModal){

    letterModal.style.display = "none";

}


});

// ======================================
// MENSAGEM FINAL
// ======================================

surpriseBtn.addEventListener("click", () => {


surpriseModal.style.display = "flex";


});

closeSurprise.addEventListener("click", () => {


surpriseModal.style.display = "none";


});

surpriseModal.addEventListener("click", e => {


if(e.target === surpriseModal){

    surpriseModal.style.display = "none";

}


});

// ======================================
// CHUVA DE CORAÇÕES AZUIS
// ======================================

const emojis = [
"💙",
"🩵",
"✨",
"⭐",
"💎"
];

function createHeart() {


const heart =
    document.createElement("div");

heart.classList.add("heart");

heart.innerHTML =
    emojis[
        Math.floor(
            Math.random() * emojis.length
        )
    ];

heart.style.left =
    Math.random() * 100 + "vw";

heart.style.fontSize =
    Math.random() * 20 + 20 + "px";

heart.style.animationDuration =
    Math.random() * 5 + 6 + "s";

document.body.appendChild(heart);

setTimeout(() => {

    heart.remove();

}, 12000);


}

setInterval(createHeart, 350);

// ======================================
// SLIDESHOW DE FUNDO
// ======================================

const photos = [


"img/foto1.jpg",
"img/foto2.jpg",
"img/foto3.jpg",
"img/foto4.jpg",
"img/foto5.jpg",
"img/foto6.jpg",
"img/foto7.jpg",
"img/foto8.jpg",
"img/foto9.jpg",
"img/foto10.jpg",
"img/foto11.jpg",
"img/foto12.jpg",
"img/foto13.jpg",
"img/foto14.jpg",
"img/foto15.jpg",
"img/foto16.jpg",
"img/foto17.jpg",
"img/foto18.jpg",
"img/foto19.jpg",
"img/foto20.jpg",
"img/foto21.jpg",
"img/foto22.jpg",
"img/foto23.jpg",
"img/foto24.jpg",
"img/foto25.jpg",
"img/foto26.jpg",
"img/foto27.jpg",
"img/foto28.jpg",
"img/foto29.jpg",
"img/foto30.jpg"


];

let currentPhoto = 0;

function changeBackground() {


document.body.style.backgroundImage =
    `linear-gradient(
        rgba(0,0,0,.75),
        rgba(0,0,0,.85)
    ),
    url('${photos[currentPhoto]}')`;

document.body.style.backgroundSize =
    "cover";

document.body.style.backgroundPosition =
    "center";

document.body.style.backgroundAttachment =
    "fixed";

currentPhoto++;

if(currentPhoto >= photos.length){

    currentPhoto = 0;

}


}

changeBackground();

setInterval(changeBackground, 8000);

// ======================================
// ANIMAÇÃO AO ROLAR
// ======================================

const observer =
new IntersectionObserver(entries => {


    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.animate([
                {
                    opacity: 0,
                    transform:
                        "translateY(50px)"
                },
                {
                    opacity: 1,
                    transform:
                        "translateY(0)"
                }
            ],{
                duration: 1000,
                fill: "forwards"
            });

        }

    });

});


document
.querySelectorAll(
"section, .reason-card, .timeline-item"
)
.forEach(item => {


item.style.opacity = "0";

observer.observe(item);


});

// ======================================
// EFEITO DE DIGITAÇÃO
// ======================================

const typingElement =
document.getElementById("typing-text");

const originalText =
typingElement.innerText;

// Normaliza espaçamento após pontuação caso o texto venha sem espaços
let normalizedText = originalText
    .replace(/\.\.\.(?!\s)/g, '... ') // garante espaço após reticências
    .replace(/([.,:;!?])(?=[^\s])/g, '$1 '); // adiciona espaço após pontuação

// Se a normalização modificou o texto, usamos ela como fonte
const textToType = normalizedText.length ? normalizedText : originalText;

typingElement.innerText = "";

let charIndex = 0;

function typeText() {

    if(charIndex < textToType.length){

        typingElement.innerText +=
            textToType.charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 40);

    }

}

typeText();

// ======================================
// TECLA ESC FECHA MODAIS
// ======================================

document.addEventListener(
"keydown",
e => {


    if(e.key === "Escape"){

        imageModal.style.display = "none";

        letterModal.style.display = "none";

    }

}


);

// ======================================
// CONSOLE
// ======================================

console.log(
`💙 Silvia & Neneco 💙
Site carregado com sucesso.
`
);

// ======================================
// ABRIR CARTA PRINCIPAL (FLAP)
// ======================================

const mainLetterCard = document.querySelector('.letter-card');

if(mainLetterCard){
    // permitir abrir com clique
    mainLetterCard.addEventListener('click', () => {
        const isOpen = mainLetterCard.classList.toggle('open');
        mainLetterCard.setAttribute('aria-pressed', isOpen ? 'true' : 'false');
    });

    // permitir abrir/fechar com Enter/Space
    mainLetterCard.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' '){
            e.preventDefault();
            const isOpen = mainLetterCard.classList.toggle('open');
            mainLetterCard.setAttribute('aria-pressed', isOpen ? 'true' : 'false');
        }
    });

}
