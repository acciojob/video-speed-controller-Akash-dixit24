const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const sliders = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    toggle.textContent = video.paused ? "►" : "❚ ❚";
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

function scrub(e) {
    const scrubTime =
        (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);

sliders.forEach(slider =>
    slider.addEventListener("input", handleRangeUpdate)
);

skipButtons.forEach(button =>
    button.addEventListener("click", skip)
);

video.addEventListener("timeupdate", handleProgress);

progress.addEventListener("click", scrub);