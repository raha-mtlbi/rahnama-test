let tedad = document.getElementsByName("tedad");
let harf = document.getElementsByName("harf");
let div = document.getElementById("form");

const createItem = (e) => {
  e.preventDefault();
  tedad.className = "hide";
  let tedad = tedad.getAttribute("value");
  console.log(div);
  for (var i = 0; i < tedad; i++) {
    const name = document.createElement("input");
    const color = document.createElement("input");
    const city = document.createElement("input");
    const food = document.createElement("input");
    name.name = ("name", `name${i}`);
    color.name = ("name", `color${i}`);
    city.name = ("name", `city${i}`);
    food.name = ("name", `food${i}`);
    name.placeholder = ("name", i);
    color.placeholder = ("name", i);
    city.placeholder = ("name", i);
    food.placeholder = ("name", i);
    div.appendChild(name);
    div.appendChild(color);
    div.appendChild(city);
    div.appendChild(food);
  }
  score();
};

const score = () => {
  for (var i = 0; i < tedad; i++) {
    let name = document.getElementsByName(`name${i}`);
    let color = document.getElementsByName(`color${i}`);
    let city = document.getElementsByName(`city${i}`);
    let food = document.getElementsByName(`food${i}`);
  }
};

let submit_btn = document.getElementById("btn");
submit_btn.addEventListener("click", (e) => createItem(e));
