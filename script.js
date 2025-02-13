document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("play-button");
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const music = document.getElementById("bg-music");

    function startSite() {
        music.volume = 0.5;
        music.play().catch(error => console.log("Music error:", error));

        introScreen.style.opacity = "0";
        setTimeout(() => {
            introScreen.style.display = "none";
            mainContent.classList.remove("hidden");
        }, 500);
    }

    playButton.addEventListener("click", startSite);

    setTimeout(() => {
        document.querySelector(".photo").classList.add("visible");
    }, 2000);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = Math.random() > 0.5 ? "🤍" : "🖤"; 

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-10px";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        document.getElementById("hearts-container").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});
