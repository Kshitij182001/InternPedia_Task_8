let carpet = [
  "./assets/asset 94.jpeg",
  "./assets/asset 95.jpeg",
  "./assets/asset 96.jpeg",
  "./assets/asset 97.jpeg",
  "./assets/asset 98.jpeg",
  "./assets/asset 99.jpeg",
  "./assets/asset 100.jpeg",
  "./assets/asset 101.jpeg",
  "./assets/asset 102.jpeg",
  "./assets/asset 103.jpeg",
  "./assets/asset 104.jpeg",
  "./assets/asset 105.jpeg",
  "./assets/asset 106.jpeg",
  "./assets/asset 107.jpeg",
  "./assets/asset 108.jpeg",
  "./assets/asset 109.jpeg",
  "./assets/asset 110.jpeg",
  "./assets/asset 111.jpeg",
  "./assets/asset 112.jpeg",
  "./assets/asset 113.jpeg",
  "./assets/asset 114.jpeg",
  "./assets/asset 115.jpeg",
  "./assets/asset 116.jpeg",
];

for (let i = 1; i <= carpet.length; i++) {
  document.getElementById("carpet").innerHTML += `
    <img src="${carpet[i]}" alt="carpet-${i}" srcset="">
    `;
}

let bikes = [
  "./assets/asset 201.jpeg",
  "./assets/asset 202.jpeg",
  "./assets/asset 203.jpeg",
  "./assets/asset 204.jpeg",
  "./assets/asset 205.jpeg",
  "./assets/asset 206.jpeg",
  "./assets/asset 207.jpeg",
  "./assets/asset 208.jpeg",
  "./assets/asset 209.jpeg",
  "./assets/asset 210.jpeg",
  "./assets/asset 211.jpeg",
  "./assets/asset 212.jpeg",
  "./assets/asset 213.jpeg",
  "./assets/asset 214.jpeg",
  "./assets/asset 215.jpeg",
  "./assets/asset 216.jpeg",
  "./assets/asset 217.jpeg",
  "./assets/asset 218.jpeg",
  "./assets/asset 219.jpeg",
  "./assets/asset 220.jpeg",
  "./assets/asset 221.jpeg",
  "./assets/asset 222.jpeg",
  "./assets/asset 223.jpeg",
  "./assets/asset 224.jpeg",
  "./assets/asset 225.jpeg",
  "./assets/asset 226.jpeg",
  "./assets/asset 227.jpeg",
  "./assets/asset 228.jpeg",
  "./assets/asset 229.jpeg",
  "./assets/asset 230.jpeg",
];

for (let i = 1; i <= bikes.length; i++) {
  document.getElementById("bikes").innerHTML += `
    <img src="${bikes[i]}" alt="bike-${i}" srcset="">
    `;
}

let phones_array = [
  {
    name: "OnePlus Nord CE 3 Lite 5G",
    src: "./assets/asset 51.jpeg",
    offer: "10%",
  },
  {
    name: "iQOO Neo9 Pro",
    src: "./assets/asset 52.jpeg",
    offer: "13%",
  },
  {
    name: "iQOO Z7 Pro",
    src: "./assets/asset 53.jpeg",
    offer: "11%",
  },
  {
    name: "Redmi 13C",
    src: "./assets/asset 54.jpeg",
    offer: "37%",
  },
  {
    name: "iQOO Neo 7 Pro",
    src: "./assets/asset 55.jpeg",
    offer: "23%",
  },
  {
    name: "Redmi 12 5G",
    src: "./assets/asset 56.jpeg",
    offer: "28%",
  },
  {
    name: "iQOO 12 5G",
    src: "./assets/asset 57.jpeg",
    offer: "12%",
  },
  {
    name: "iQOO Z6 Lite",
    src: "./assets/asset 58.jpeg",
    offer: "40%",
  },
  {
    name: "Poco M6 Pro 5G",
    src: "./assets/asset 59.jpeg",
    offer: "34%",
  },
  {
    name: "Realme Narzo N55",
    src: "./assets/asset 60.jpeg",
    offer: "40%",
  },
  {
    name: "Poco C55",
    src: "./assets/asset 61.jpeg",
    offer: "54%",
  },
  {
    name: "Poco C51",
    src: "./assets/asset 62.jpeg",
    offer: "23%",
  },
];

for (let i = 1; i <= phones_array.length; i++) {
  document.getElementById("phones").innerHTML += `
    <div class="phone">
    <img class="hide-bg" src="${phones_array[i].src}" alt="phone-${i}" srcset="">
    <div class="specs">
    <span class="offer">
    <p style="font-size: 12px;
    background-color: #CC0C39;
    padding: 5px;
    border-radius: 2px;
    color: white;
    font-weight: 500;">Up to ${phones_array[i].offer} off</p>
    <p>Limited time deal</p>
    </span>
    <p class="phone-name">${phones_array[i].name}</p>
    </div>
    </div>
    `;
}
