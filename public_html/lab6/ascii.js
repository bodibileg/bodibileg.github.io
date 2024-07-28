var animationIntervalId;
var frames = [];
var currentFrameIndex = 0;
var defaultDelay = 250;
var turboDelay = 50;

document.addEventListener("DOMContentLoaded", function () {
  const textArea = document.getElementById("text-area");
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const animationSelect = document.getElementById("animation");
  const sizeSelect = document.getElementById("fontsize");
  const turboCheckBox = document.getElementById("turbo");

  startButton.onclick = function () {
    start();
  };
  stopButton.onclick = function () {
    stop();
  };
  animationSelect.onchange = function (e) {
    stop();
    textArea.value = ANIMATIONS[e.target.value];
  };
  sizeSelect.onchange = function (e) {
    const selectedSize = sizeSelect.value;
    textArea.style.fontSize = selectedSize;
  };
  turboCheckBox.onchange = function (e) {
    if (animationIntervalId) {
      adjustSpeed();
    }
  };

  function start() {
    clearAnimation();

    // get options
    const isTurbo = turboCheckBox.checked;

    // get animation and frames
    const animation = textArea.value;
    frames = animation.split("=====\n");

    // start interval
    currentFrameIndex = 0;
    animationIntervalId = setInterval(
      () => {
        textArea.value = frames[currentFrameIndex];
        currentFrameIndex = (currentFrameIndex + 1) % frames.length;
      },
      isTurbo ? turboDelay : defaultDelay
    );
    startButton.disabled = true;
    animationSelect.disabled = true;
    stopButton.disabled = false;
  }

  function stop() {
    clearAnimation();
    stopButton.disabled = true;
    startButton.disabled = false;
    animationSelect.disabled = false;
  }

  function clearAnimation() {
    if (animationIntervalId) {
      clearInterval(animationIntervalId);
    }
  }

  function adjustSpeed() {
    clearAnimation();
    const isTurbo = turboCheckBox.checked;

    animationIntervalId = setInterval(
      () => {
        textArea.value = frames[currentFrameIndex];
        currentFrameIndex = (currentFrameIndex + 1) % frames.length;
      },
      isTurbo ? turboDelay : defaultDelay
    );
  }
});
