// =====================================
// COUNTDOWN TO 17 JUNE 2027
// =====================================

const birthday =
    new Date("June 17, 2027 00:00:00").getTime();


function updateCountdown() {


    const now =
        new Date().getTime();


    const distance =
        birthday - now;


    if (distance <= 0) {


        document.querySelector(".countdown").innerHTML = `

            <h2>

                🎉 Happy Birthday Dezzu! 🎂💖

            </h2>

        `;


        return;

    }


    const days =

        Math.floor(

            distance /

            (1000 * 60 * 60 * 24)

        );


    const hours =

        Math.floor(

            (distance /

                (1000 * 60 * 60)) % 24

        );


    const minutes =

        Math.floor(

            (distance /

                (1000 * 60)) % 60

        );


    const seconds =

        Math.floor(

            (distance / 1000) % 60

        );


    document.getElementById("days")

        .textContent =

        days.toString()

            .padStart(2, "0");


    document.getElementById("hours")

        .textContent =

        hours.toString()

            .padStart(2, "0");


    document.getElementById("minutes")

        .textContent =

        minutes.toString()

            .padStart(2, "0");


    document.getElementById("seconds")

        .textContent =

        seconds.toString()

            .padStart(2, "0");

}


setInterval(

    updateCountdown,

    1000

);


updateCountdown();



// =====================================
// FALLING HEARTS
// =====================================

function createHeart() {


    const heart =

        document.createElement("div");


    heart.className =

        "heart";


    const heartSymbols = [

        "💖",

        "💕",

        "💗",

        "💘",

        "💝",

        "✨"

    ];


    heart.innerHTML =

        heartSymbols[

            Math.floor(

                Math.random() *

                heartSymbols.length

            )

        ];


    heart.style.left =

        Math.random() * 100 + "vw";


    heart.style.fontSize =

        (15 + Math.random() * 25) +

        "px";


    heart.style.animationDuration =

        (5 + Math.random() * 7) +

        "s";


    document

        .getElementById("hearts")

        .appendChild(heart);


    setTimeout(

        () => {

            heart.remove();

        },

        13000

    );

}


setInterval(

    createHeart,

    500

);



// =====================================
// MUSIC
// =====================================

function toggleMusic() {


    const music =

        document.getElementById(

            "birthdayMusic"

        );


    const button =

        document.getElementById(

            "musicBtn"

        );


    if (music.paused) {


        music.play()

            .then(

                () => {


                    button.textContent =

                        "⏸️ Pause Music";

                }

            )

            .catch(

                () => {


                    alert(

                        "Please add birthday-song.mp3 inside static/music folder."

                    );

                }

            );

    }


    else {


        music.pause();


        button.textContent =

            "🎵 Play Birthday Music";

    }

}



// =====================================
// OPEN MEMORIES
// =====================================

const memoriesBtn =

    document.getElementById(

        "memoriesBtn"

    );


const photoGrid =

    document.getElementById(

        "photoGrid"

    );


if (

    memoriesBtn &&

    photoGrid

) {


    memoriesBtn.addEventListener(

        "click",

        function () {


            // SHOW PHOTOS

            photoGrid.classList.add(

                "show"

            );


            // CHANGE BUTTON TEXT

            memoriesBtn.textContent =

                "💖 Our Memories Are Open 💖";


            // SCROLL TO PHOTOS

            photoGrid.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });


            // FIREWORKS

            createCelebration();


            // EXTRA HEARTS

            for (

                let i = 0;

                i < 20;

                i++

            ) {


                setTimeout(

                    () => {

                        createHeart();

                    },

                    i * 100

                );

            }

        }

    );

}



// =====================================
// FIREWORKS
// =====================================

const canvas =

    document.getElementById(

        "fireworks"

    );


const ctx =

    canvas.getContext(

        "2d"

    );


let particles = [];



function resizeCanvas() {


    canvas.width =

        window.innerWidth;


    canvas.height =

        window.innerHeight;

}


window.addEventListener(

    "resize",

    resizeCanvas

);


resizeCanvas();



// =====================================
// CREATE FIREWORK
// =====================================

function createFirework(

    x,

    y

) {


    for (

        let i = 0;

        i < 70;

        i++

    ) {


        const angle =

            Math.random() *

            Math.PI *

            2;


        const speed =

            Math.random() *

            6 + 2;


        particles.push({

            x: x,

            y: y,

            vx:

                Math.cos(angle) *

                speed,

            vy:

                Math.sin(angle) *

                speed,

            life: 100

        });

    }

}



// =====================================
// ANIMATE FIREWORKS
// =====================================

function animateFireworks() {


    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );


    particles.forEach(

        (

            particle,

            index

        ) => {


            particle.x +=

                particle.vx;


            particle.y +=

                particle.vy;


            particle.vy +=

                0.05;


            particle.life--;


            ctx.globalAlpha =

                particle.life /

                100;


            ctx.beginPath();


            ctx.arc(

                particle.x,

                particle.y,

                2,

                0,

                Math.PI * 2

            );


            ctx.fillStyle =

                "white";


            ctx.fill();


            if (

                particle.life <= 0

            ) {


                particles.splice(

                    index,

                    1

                );

            }

        }

    );


    ctx.globalAlpha = 1;


    requestAnimationFrame(

        animateFireworks

    );

}


animateFireworks();



// =====================================
// CELEBRATION FIREWORKS
// =====================================

function createCelebration() {


    for (

        let i = 0;

        i < 8;

        i++

    ) {


        setTimeout(

            () => {


                createFirework(

                    Math.random() *

                    canvas.width,


                    Math.random() *

                    canvas.height *

                    0.55

                );


            },

            i * 300

        );

    }

}



// =====================================
// SECRET MESSAGE
// =====================================

const secretBtn =

    document.getElementById(

        "secretBtn"

    );


const secretMessage =

    document.getElementById(

        "secretMessage"

    );


const typingText =

    document.getElementById(

        "typingText"

    );


const message =

    "Dezzu, tum meri pehli best friend ho 💖✨. Tum mere liye sirf ek friend nahi ho, balki meri zindagi ka ek anmol hissa ho 🥹💕. Tumhare liye main kuch bhi kar sakti hoon, kyunki tum mere liye bahut special ho 💗. Hamari dosti mere liye bahut precious hai, aur main hamesha tumhari care karungi 🤍✨. Thank you meri life ka itna beautiful part banne ke liye. Happy Birthday meri special best friend Dezzu 🎂🎉💖✨";


if (

    secretBtn &&

    secretMessage &&

    typingText

) {


    secretBtn.addEventListener(

        "click",

        function () {


            // SHOW SECRET MESSAGE

            secretMessage.classList.add(

                "show"

            );


            // CHANGE BUTTON

            secretBtn.textContent =

                "💖 Secret Message Opened 💖";


            // CLEAR TEXT

            typingText.textContent =

                "";


            let index = 0;


            // TYPING EFFECT

            function typeMessage() {


                if (

                    index <

                    message.length

                ) {


                    typingText.textContent +=

                        message.charAt(

                            index

                        );


                    index++;


                    setTimeout(

                        typeMessage,

                        35

                    );

                }

            }


            typeMessage();


            // SCROLL TO MESSAGE

            secretMessage.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });


            // FIREWORKS

            createCelebration();


            // EXTRA HEARTS

            for (

                let i = 0;

                i < 15;

                i++

            ) {


                setTimeout(

                    () => {

                        createHeart();

                    },

                    i * 100

                );

            }

        }

    );

}