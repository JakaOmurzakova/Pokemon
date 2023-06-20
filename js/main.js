const container = document.querySelector(".container");
const list = document.querySelectorAll(".list");

const API = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon() {
  const res = await fetch(API);
  const data = await res.json();

  console.log(data);
  return data;
}

render();

async function render() {
  const data = await getPokemon();

  container.innerHTML = "";

  data.results.forEach(async (item) => {
    const res = await fetch(item.url);
    const dataPokemon = await res.json();
    const imagePokemon = dataPokemon.sprites.front_default;
    const height = dataPokemon.height;
    const weight = dataPokemon.weight;
    const types = dataPokemon.types[0].type.name;

    console.log(height, weight, types);

    container.innerHTML += `<div class="list">
    <img src="${imagePokemon}" alt="">
      <h2>${item.name}</h2>
        <span>Height: ${height}</span>
        <span>Weight: ${weight}</span>
        <span>Type: ${types}</span>
    </div>`;
  });
}

getPokemon();
