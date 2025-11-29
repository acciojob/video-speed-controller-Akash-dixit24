const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('video');

speed.addEventListener('mousemove', function (e) {
  const y = e.pageY - this.offsetTop;
  const percent = Math.min(Math.max(y / this.offsetHeight, 0), 1);

  const min = 0.4;
  const max = 4;
  const playbackRate = percent * (max - min) + min;

  bar.style.height = `${percent * 100}%`;
  bar.textContent = playbackRate.toFixed(2) + '×';

  video.playbackRate = playbackRate;
});
