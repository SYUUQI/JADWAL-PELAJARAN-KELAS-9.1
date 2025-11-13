// ===== Ganti gambar jadwal =====
const buttons = document.querySelectorAll(".hari-buttons button");
const jadwalImg = document.getElementById("jadwal-img");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const day = btn.dataset.day;

    // Kalau gambar sudah muncul, klik tombol lagi = sembunyikan
    if (jadwalImg.src.includes(day)) {
      jadwalImg.style.opacity = "0";
      setTimeout(() => {
        jadwalImg.style.display = "none";
        jadwalImg.src = "";
      }, 300);
      return;
    }

    jadwalImg.style.display = "block";
    jadwalImg.style.opacity = "0";
    setTimeout(() => {
      jadwalImg.src = `images/${day}.jpg`;
      jadwalImg.style.opacity = "1";
    }, 300);
  });
});

// ===== Mode Gelap/Terang =====
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️ Mode Terang";
  } else {
    themeToggle.textContent = "🌙 Mode Gelap";
  }
});

// ===== Animasi background cairan =====
const canvas = document.getElementById("liquid-bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;
function drawLiquid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x++) {
      const y = 100 * Math.sin((x + time + i * 300) / 250) + 200 + i * 100;
      ctx.lineTo(x, y);
    }
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, `hsl(${i * 100 + time / 10}, 70%, 50%)`);
    gradient.addColorStop(1, `hsl(${i * 100 + 120 + time / 10}, 80%, 40%)`);
    ctx.fillStyle = gradient;
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fill();
  }
  time += 2;
  requestAnimationFrame(drawLiquid);
}
drawLiquid();
