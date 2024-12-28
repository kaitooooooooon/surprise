document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");

  // クリック音のオーディオ要素を生成
  const clickSound = new Audio("https://www.soundjay.com/button/beep-07.wav");

  // ボタン1のクリックイベント
  button1.addEventListener("click", () => {
    playClickSound();
    const url1 = "https://drive.google.com/file/d/1-6KEs_IPe2EgEQLzqN9C6bfOEKHSETEI/view?usp=sharing";
    window.open(url1, "_blank", "noopener,noreferrer");
  });

  // ボタン2のクリックイベント
  button2.addEventListener("click", () => {
    playClickSound();
    const url2 = "https://drive.google.com/file/d/163-1Lqwi1kyVuV-QMhU-IPj3Ayv_g-b3/view?usp=sharing";
    window.open(url2, "_blank", "noopener,noreferrer");
  });

  // クリック音を再生する関数
  function playClickSound() {
    clickSound.volume = 0.5; // 音量を調整 (0.5 = 50%)
    clickSound.currentTime = 0; // 音の開始位置をリセット
    clickSound.play();
  }
});
