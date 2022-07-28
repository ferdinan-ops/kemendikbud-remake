window.onload = () => {
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  const image = document.querySelector(".image");
  const sliderBar = document.querySelector(".bar");
  const countLeft = document.querySelector(".slider span:first-child");
  const judul = document.querySelector(".side-left h1");
  let count = 1;
  let i = 0;
  let sliderWidth = 0;
  const gambar = ["bg4", "bg1", "bg3", "bg2"];
  const judulText = [
    "Keputusan Bersama 4 Menteri Tentang Panduan Penyelanggaraan Pembelajaran di Masa Pandemi COVID-19",
    "Ayo Belajar Dikampus Merdeka Belajar lah lebih giat untuk masa depan kita",
    "G20 Education Working Group, Menata Kembali Sistem Pendidikan dengan Semangat Gotong Royong",
    "Laporan Keuangan Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    "Merdeka Belajar",
  ];

  arrowRight.addEventListener("click", () => {
    image.classList.add("fade");
    judul.classList.add("ganti");
    setTimeout(() => {
      image.style.backgroundImage = `url(img/${gambar[i + 1]}.jpg)`;
      sliderWidth += 40;
      sliderBar.style.width = `${sliderWidth}px`;
      countLeft.textContent = `0${count + 1}`;
      judul.textContent = judulText[i + 1];
      judul.classList.remove("ganti");
      image.classList.remove("fade");
      count++;
      i++;
      cekLokasi(i);
    }, 500);
  });

  arrowLeft.addEventListener("click", () => {
    image.classList.add("fade");
    judul.classList.add("ganti");
    setTimeout(() => {
      image.style.backgroundImage = `url(img/${gambar[i - 1]}.jpg)`;
      sliderWidth -= 40;
      sliderBar.style.width = `${sliderWidth}px`;
      countLeft.textContent = `0${count - 1}`;
      judul.textContent = judulText[i - 1];
      judul.classList.remove("ganti");
      image.classList.remove("fade");
      count--;
      i--;
    }, 500);
    cekLokasi(i);
  });

  cekLokasi(i);

  function cekLokasi(i) {
    if (i === 0) {
      arrowLeft.style.pointerEvents = "none";
    } else if (i === 3) {
      arrowRight.style.pointerEvents = "none";
    } else {
      arrowLeft.style.pointerEvents = "auto";
      arrowRight.style.pointerEvents = "auto";
    }
  }
};
