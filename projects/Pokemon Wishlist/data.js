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
    id: 324,
    name: "Torkoal",
    type: ["Fire"],
    tags: ["Pokedex", "PvP"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 336,
    name: "Seviper",
    type: ["Poison"],
    tags: ["Pokedex", "Stanveres"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 417,
    name: "Pachirisu",
    type: ["Electric"],
    tags: ["Pokedex", "PvP"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 441,
    name: "Chatot",
    type: ["Normal", "Flying"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 461,
    name: "Weavile",
    type: ["Dark", "Ice"],
    tags: ["Pokedex", "Raider"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 475,
    name: "Gallade",
    type: ["Psychic", "Fighting"],
    tags: ["Pokedex", "Mega"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 482,
    name: "Azelf",
    type: ["Psychic"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 486,
    name: "Regigigas",
    type: ["Normal"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 538,
    name: "Throh",
    type: ["Fighting"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 561,
    name: "Sigilyph",
    type: ["Psychic", "Flying"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 607,
    name: "Litwick",
    type: ["Ghost", "Fire"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 608,
    name: "Lampent",
    type: ["Ghost", "Fire"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 609,
    name: "Chandelure",
    type: ["Ghost", "Fire"],
    tags: ["Pokedex", "Raider", "Mega", "Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 636,
    name: "Larvesta",
    type: ["Bug", "Fire"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 637,
    name: "Volcarona",
    type: ["Bug", "Fire"],
    tags: ["Pokedex", "Raider", "Lucky"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 701,
    name: "Hawlucha",
    type: ["Fighting", "Flying"],
    tags: ["Pokedex", "PvP"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 749,
    name: "Mudbray",
    type: ["Ground"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 750,
    name: "Mudsdale",
    type: ["Ground"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 764,
    name: "Comfey",
    type: ["Fairy"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 787,
    name: "Tapu Bulu",
    type: ["Grass", "Fairy"],
    tags: ["Pokedex", "Raider"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 791,
    name: "Solgaleo",
    type: ["Psychic", "Steel"],
    tags: ["Pokedex", "PvP"],
    neededBy: ["Stanveres"]
  },
  {
    id: 794,
    name: "Buzzwole",
    type: ["Bug", "Fighting"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 796,
    name: "Xurkitree",
    type: ["Electric"],
    tags: ["Pokedex", "Raider"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 805,
    name: "Stakataka",
    type: ["Rock", "Steel"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 806,
    name: "Blacephalon",
    type: ["Fire", "Ghost"],
    tags: ["Pokedex", "Raider"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 825,
    name: "Dottler",
    type: ["Bug", "Psychic"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 826,
    name: "Orbeetle",
    type: ["Bug", "Psychic"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 839,
    name: "Coalossal",
    type: ["Rock", "Fire"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 841,
    name: "Flapple",
    type: ["Grass", "Dragon"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 842,
    name: "Appletun",
    type: ["Grass", "Dragon"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 843,
    name: "Silicobra",
    type: ["Ground"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 844,
    name: "Sandaconda",
    type: ["Ground"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 847,
    name: "Barraskewda",
    type: ["Water"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 856,
    name: "Hatenna",
    type: ["Psychic", "Fairy"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 857,
    name: "Hattrem",
    type: ["Psychic", "Fairy"],
    tags: ["Pokedex", "Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 858,
    name: "Hatterene",
    type: ["Psychic", "Fairy"],
    tags: ["Pokedex", "Raider", "Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 874,
    name: "Stonjourner",
    type: ["Rock"],
    tags: ["Pokedex", "Raider"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 960,
    name: "Wiglett",
    type: ["Water"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 961,
    name: "Wugtrio",
    type: ["Water"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 968,
    name: "Orthworm",
    type: ["Steel"],
    tags: ["Pokedex", "PvP"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 1019,
    name: "Hydrapple",
    type: ["Grass", "Dragon"],
    tags: ["Pokedex"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 717,
    name: "Yveltal",
    type: ["Dark", "Flying"],
    tags: ["Pokedex", "Raider"],
    neededBy: ["Gloomcaller", "Stanveres"]
  },
  {
    id: 13,
    name: "Weedle",
    type: ["Bug", "Poison"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 14,
    name: "Kakuna",
    type: ["Bug", "Poison"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 15,
    name: "Beedrill",
    type: ["Bug", "Poison"],
    tags: ["Lucky", "Mega", "Raider"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 627,
    name: "Rufflet",
    type: ["Normal", "Flying"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 628,
    name: "Braviary",
    type: ["Normal", "Flying"],
    tags: ["Lucky", "Raider"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 396,
    name: "Starly",
    type: ["Normal", "Flying"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 397,
    name: "Staravia",
    type: ["Normal", "Flying"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 397,
    name: "Staraptor",
    type: ["Normal", "Flying"],
    tags: ["Lucky", "Raider", "Mega"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 491,
    name: "Darkrai",
    type: ["Dark"],
    tags: ["Raider"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 447,
    name: "Riolu",
    type: ["Fighting"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 448,
    name: "Lucario",
    type: ["Fighting"],
    tags: ["Raider", "Lucky", "Mega"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 639,
    name: "Terrakion",
    type: ["Rock", "Fighting"],
    tags: ["Raider"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 406,
    name: "Budew",
    type: ["Grass", "Poison"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 315,
    name: "Roselia",
    type: ["Grass", "Poison"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 407,
    name: "Budew",
    type: ["Grass", "Poison"],
    tags: ["Lucky", "Raider"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 69,
    name: "Bellsprout",
    type: ["Grass", "Poison"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 70,
    name: "Weepinbell",
    type: ["Grass", "Poison"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 71,
    name: "Victreebel",
    type: ["Grass", "Poison"],
    tags: ["Lucky", "Raider", "Mega"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 71,
    name: "Victreebel",
    type: ["Grass", "Poison"],
    tags: ["Lucky", "Raider", "Mega"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 221,
    name: "Hisuian Qwilfish",
    type: ["Dark", "Poison"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 221,
    name: "Qwilfish",
    type: ["Dark", "Poison"],
    tags: ["Lucky"],
    neededBy: ["Gloomcaller"]
  },
  {
    id: 904,
    name: "Overqwil",
    type: ["Dark", "Poison"],
    tags: ["Lucky", "Raider"],
    neededBy: ["Gloomcaller"]
  }
];
