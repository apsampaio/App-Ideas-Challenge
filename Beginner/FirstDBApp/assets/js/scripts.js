const baseAPI = "https://pokeapi.co/api/v2/pokemon/";
let currentPokemon = null;
const typeReference = {
  normal: {
    color: "#808080",
  },
  bug: {
    color: "#9acd32",
  },
  dragon: {
    color: "#b0c4de",
  },
  fire: {
    color: "#ff4400",
  },
  ice: {
    color: "#87ceeb",
  },
  water: {
    color: "#6495ed",
  },
  electric: {
    color: "#ffd700",
  },
  grass: {
    color: "#6cd86c",
  },
  fighting: {
    color: "#ffa07a",
  },
  rock: {
    color: "#a0522d",
  },
  poison: {
    color: "#8a2be2",
  },
  ground: {
    color: "#deb887",
  },
  flying: {
    color: "#9cc8ce",
  },
  psychic: {
    color: "#ee82ee",
  },
  dark: {
    color: "#cd853f",
  },
  steel: {
    color: "#778899",
  },
  fairy: {
    color: "#da70d6",
  },
  ghost: {
    color: "#9370d8",
  },
};
const ballTypeReference = {
  pokeBall: 0,
  greatBall: 55,
  ultraBall: 105,
};

async function callPokemon(pokemonId) {
  try {
    const response = await axios.get(baseAPI + pokemonId);
    currentPokemon = response.data;
    makePokemon(response.data);
    catchPokemon("pokeBall", currentPokemon);
  } catch (error) {
    console.error(error);
  }
}
function callRandomPokemon() {
  callPokemon(Math.round(Math.random() * 151));
}

function makePokemon(pokemon) {
  console.log(pokemon);
  document.querySelector("p").innerText = pokemon.name.replace(
    pokemon.name[0],
    pokemon.name[0].toUpperCase()
  );

  document.querySelector("img").src = pokemon.sprites.front_default;
  document.querySelector(".pokemon-type").innerHTML = "";
  pokemon.types.forEach((e) => makeBadge(e.type.name));
}
function makeBadge(badgeName) {
  const div = document.querySelector(".pokemon-type");
  const badge = document.createElement("span");
  badge.className = "badge";
  badge.innerText = badgeName.toUpperCase();
  badge.style.backgroundColor = typeReference[badgeName].color;

  div.appendChild(badge);
}

function catchPokemon(ball, pokemon) {
  let rate = 0;
  const ballRate = Math.round(Math.random() * 255 + ballTypeReference[ball]);
  pokemon.stats.forEach((stat) => {
    rate += stat.base_stat;
  });

  console.log("Pokemon rate:", rate / 6);
  console.log("Your pokeball rate", ballRate);
  console.log(ballRate > rate / 6 ? "Catch" : "Escape");
}

callRandomPokemon();
