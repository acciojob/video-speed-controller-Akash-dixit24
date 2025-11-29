const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('video');

speed.addEventListener('mousemove', function (e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  
  const min = 0.4;   // minimum speed
  const max = 4;     // maximum speed
  const playbackRate = percent * (max - min) + min;

  bar.style.height = `${percent * 100}%`;
  bar.textContent = `${playbackRate.toFixed(2)}×`;

  video.playbackRate = playbackRate;
});
