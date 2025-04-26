// メイン画像を取得
const mainImage = document.getElementById("pics");

// 各サムネイル画像を取得し、それぞれクリック時に画像を変更
document.getElementById("btn1").addEventListener("click", () => {
  mainImage.src = "img/wasedahonkyann.png";
});

document.getElementById("btn2").addEventListener("click", () => {
  mainImage.src = "img/wasedatoyama.png";
});

document.getElementById("btn3").addEventListener("click", () => {
  mainImage.src = "img/wasedanisiwaseda.png";
});

document.getElementById("btn4").addEventListener("click", () => {
  mainImage.src = "img/wasedatokorozawa.png";
});
