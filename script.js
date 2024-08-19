const image = document.querySelector("#my-img");
const text = document.querySelector("h2");
const btnOne = document.querySelector(".btn-one");
const btnTwo = document.querySelector(".btn-two");

btnOne.addEventListener("click", exotic);

function exotic() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/exotic.jpg?v=1676148769657"
  );
  text.textContent = "Фрукты или ягоды?";
  btnOne.innerHTML = "Ягоды";
  btnTwo.innerHTML = "Фрукты";
  btnOne.addEventListener("click", berriesExotic);
  btnTwo.addEventListener("click", fruitsExotic);
}

function berriesExotic() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/berriesExotic.jpg?v=1676204987587"
  );
  text.textContent = "Кислые или сладкие?";
  btnOne.innerHTML = "Кислые";
  btnTwo.innerHTML = "Сладкие";
  btnOne.addEventListener("click", berriesExoticSour);
  btnTwo.addEventListener("click", berriesExoticSweet);
}

function fruitsExotic() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/fruitsExotic.jpg?v=1676205028490"
  );
  text.textContent = "Кислые или сладкие?";
  btnOne.innerHTML = "Кислые";
  btnTwo.innerHTML = "Сладкие";
  btnOne.addEventListener("click", fruitsExoticSour);
  btnTwo.addEventListener("click", fruitsExoticSweet);
}

function berriesExoticSour() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/blackberry.jpg?v=1676204991066"
  );
  text.textContent = "Попробуй ежевику!";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

function berriesExoticSweet() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/blueberry.jpg?v=1676204994019"
  );
  text.textContent = "Попробуй голубику!";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

function fruitsExoticSour() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/grapefruit.jpg?v=1676205034848"
  );
  text.textContent = "Попробуй грейпфрут!";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

function fruitsExoticSweet() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/pineapple.jpg?v=1676205054112"
  );
  text.textContent = "Попробуй ананас!";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

btnTwo.addEventListener("click", noExotic);
function noExotic() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/noexotic.jpg?v=1676205041051"
  );
  text.textContent = "Фрукты или ягоды?";
  btnOne.innerHTML = "Ягоды";
  btnTwo.innerHTML = "Фрукты";
  btnOne.addEventListener("click", berries);
  btnTwo.addEventListener("click", fruits);
}

function berries() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/berries.jpg?v=1676204981397"
  );
  text.textContent = "Кислые или сладкие?";
  btnOne.innerHTML = "Кислые";
  btnTwo.innerHTML = "Сладкие";
  btnOne.addEventListener("click", berriesSour);
  btnTwo.addEventListener("click", berriesSweet);
}

function fruits() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/fruits.jpg?v=1676205017638"
  );
  text.textContent = "Кислые или сладкие?";
  btnOne.innerHTML = "Кислые";
  btnTwo.innerHTML = "Сладкие";
  btnOne.addEventListener("click", fruitsSour);
  btnTwo.addEventListener("click", fruitsSweet);
}

function berriesSour() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/currants.jpg?v=1676204999485"
  );
  text.textContent = "Попробуй смородину!";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

function berriesSweet() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/strawberry.jpg?v=1676205069091"
  );
  text.textContent = "Попробуй клубнику!";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

function fruitsSour() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/plum.jpg?v=1676205062879"
  );
  text.textContent = "Попробуй сливу!";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

function fruitsSweet() {
  image.setAttribute(
    "src",
    "https://cdn.glitch.global/0e66d8b2-ab09-432c-9a58-8c5c0200026f/pear.jpg?v=1676205045865"
  );
  text.textContent = "Попробуй грушу!";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

const inputBox = document.querySelector(".input-box");
const itemDivs = document.querySelectorAll(".item");

inputBox.addEventListener("keyup", function (item) {
  const answerWord = item.target.value.toLowerCase();

  itemDivs.forEach((item) => {
    if (
      item.querySelector("p").textContent.toLowerCase().includes(answerWord)
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

const textMain = "Фруктово-ягодный день!";
const speed = 100;
let i = 0;

function letter() {
  if (i < textMain.length) {
    document.querySelector(".headerMain").textContent += textMain.charAt(i);
    i++;
    setTimeout(letter, speed);
  }
}

letter();

gsap.from (".apricot", {
  x: 350,
  delay: .5,
  duration: 3,
  //opacity: 0
 }, {delay: 3.5, duration: 1, opacity:0})

gsap.to (".cherry", {
 x: 200,
 delay: .5,
 duration: 3},
 {delay:3.5, duratio: 1, opacity: 0})

gsap.to (".cherry", {
delay: 3.5, duration: .5, opacity:0})

gsap.to (".apricot", {
  delay: 3.5, duration: .5, opacity:0})

 gsap.to (".content", {
    y: -400, opacity: 1, delay: 4.5, duration: 2}) 

gsap.to ("body", { delay: 5, backgroundColor: "yellow"})     








