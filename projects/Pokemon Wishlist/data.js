// ============================================================
// POKÉMON DATA
// ============================================================
// Fields:
//   id       -> the Pokédex number (used for the sprite image + sort)
//   name     -> display name
//   type     -> array of 1 or 2 types, e.g. ["Fire"] or ["Grass", "Poison"]
//   tags     -> array of reasons it's wanted: "Pokedex", "PvP", "Raider", "Mega", "Lucky", "Cool"
//   neededBy -> array containing "Gloomcaller", "Stanveres", or both.
// ============================================================

const pokemonData = [
  {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    tags: ["Pokedex", "Mega"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 4,
    name: "Charmander",
    type: ["Fire"],
    tags: ["PvP", "Lucky"],
    neededBy: ["Stanveres"]
  },
  {
    id: 7,
    name: "Squirtle",
    type: ["Water"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 25,
    name: "Pikachu",
    type: ["Electric"],
    tags: ["Cool", "Lucky"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 150,
    name: "Mewtwo",
    type: ["Psychic"],
    tags: ["Raider", "Lucky"],
    neededBy: ["Gloomcaller"]
  }
];
