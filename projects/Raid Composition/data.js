const raidTeams = [
  {
    type: "Fire",
    team: [
      { id: 655, name: "Delphox", have: true },
      { id: 643, name: "Reshiram", have: true },
      { id: 815, name: "Cinderace", have: true },
      { id: 500, name: "Emboar", have: true },
      { id: 6, name: "Charizard", have: true },
      { id: 136, name: "Flareon", have: true }
    ]
  },
  {
    type: "Water",
    team: [
      { id: 382, name: "Kyogre", have: true },
      { id: 818, name: "Inteleon", have: true },
      { id: 914, name: "Quaquaval", have: true },
      { id: 730, name: "Primarina", have: true },
      { id: 658, name: "Greninja", have: true },
      { id: 260, name: "Swampert", have: true }
    ]
  },
  {
    type: "Electric",
    team: [
      { id: 644, name: "Zekrom", have: true },
      { id: 145, name: "Zapdos", have: true },
      { id: 243, name: "Raikou", have: true },
      { id: 796, name: "Xurkitree", have: false },
      { id: 466, name: "Electivire", have: true },
      { id: 462, name: "Magnezone", have: true }
    ]
  },
  {
    type: "Grass",
    team: [
      { id: 652, name: "Chesnaught", have: true },
      { id: 812, name: "Rillaboom", have: true },
      { id: 908, name: "Meowscarada", have: true },
      { id: 724, name: "Decidueye", have: true },
      { id: 254, name: "Sceptile", have: true },
      { id: 470, name: "Leafeon", have: true }
    ]
  },
  {
    type: "Ice",
    team: [
      { id: 10023, name: "White Kyurem", have: false },
      { id: 10177, name: "Galarian Darmanitan", have: true },
      { id: 10177, name: "Galarian Darmanitan", have: true },
      { id: 473, name: "Mamoswine", have: true },
      { id: 471, name: "Glaceon", have: true },
      { id: 471, name: "Glaceon", have: true }
    ]
  },
  {
    type: "Fighting",
    team: [
      { id: 257, name: "Blaziken", have: true },
      { id: 448, name: "Lucario", have: false },
      { id: 892, name: "Urshifu", have: false },
      { id: 534, name: "Conkeldurr", have: true },
      { id: 68, name: "Machamp", have: true },
      { id: 297, name: "Hariyama", have: true }
    ]
  },
  {
    type: "Poison",
    team: [
      { id: 71, name: "Victreebel", have: false },
      { id: 793, name: "Nihilego", have: true },
      { id: 804, name: "Naganadel", have: true },
      { id: 407, name: "Roserade", have: false },
      { id: 904, name: "Overqwil", have: false },
      { id: 94, name: "Gengar", have: true }
    ]
  },
  {
    type: "Ground",
    team: [
      { id: 383, name: "Groudon", have: true },
      { id: 10021, name: "Therian Landorus", have: true },
      { id: 445, name: "Garchomp", have: true },
      { id: 530, name: "Excadrill", have: true },
      { id: 464, name: "Rhyperior", have: true },
      { id: 553, name: "Krookodile", have: false }
    ]
  },
  {
    type: "Flying",
    team: [
      { id: 384, name: "Rayquaza", have: true },
      { id: 717, name: "Yveltal", have: false },
      { id: 146, name: "Moltres", have: true },
      { id: 733, name: "Toucannon", have: true },
      { id: 398, name: "Staraptor", have: false },
      { id: 628, name: "Braviary", have: false }
    ]
  },
  {
    type: "Psychic",
    team: [
      { id: 150, name: "Mewtwo", have: true },
      { id: 196, name: "Espeon", have: true },
      { id: 65, name: "Alakazam", have: true },
      { id: 282, name: "Gardevoir", have: true },
      { id: 196, name: "Espeon", have: true },
      { id: 648, name: "Meloetta", have: true }
    ]
  },
  {
    type: "Bug",
    team: [
      { id: 15, name: "Beedrill", have: false },
      { id: 637, name: "Volcarona", have: false },
      { id: 212, name: "Scizor", have: true },
      { id: 127, name: "Pinsir", have: true },
      { id: 738, name: "Vikavolt", have: true },
      { id: 873, name: "Frosmoth", have: false }
    ]
  },
  {
    type: "Rock",
    team: [
      { id: 248, name: "Tyranitar", have: true },
      { id: 464, name: "Rhyperior", have: true },
      { id: 409, name: "Rampardos", have: true },
      { id: 526, name: "Gigalith", have: true },
      { id: 697, name: "Tyrantrum", have: true },
      { id: 306, name: "Aggron", have: true }
    ]
  },
  {
    type: "Ghost",
    team: [
      { id: 94, name: "Gengar", have: true },
      { id: 806, name: "Blacephalon", have: false },
      { id: 887, name: "Dragapult", have: true },
      { id: 609, name: "Chandelure", have: false },
      { id: 94, name: "Gengar", have: true },
      { id: 911, name: "Skeledirge", have: true }
    ]
  },
  {
    type: "Dragon",
    team: [
      { id: 384, name: "Rayquaza", have: true },
      { id: 612, name: "Haxorus", have: true },
      { id: 612, name: "Haxorus", have: true },
      { id: 445, name: "Garchomp", have: true },
      { id: 373, name: "Salamence", have: true },
      { id: 149, name: "Dragonite", have: true }
    ]
  },
  {
    type: "Dark",
    team: [
      { id: 248, name: "Tyranitar", have: true },
      { id: 491, name: "Darkrai", have: false },
      { id: 635, name: "Hydreigon", have: true },
      { id: 983, name: "Kingambit", have: false },
      { id: 727, name: "Incineroar", have: true },
      { id: 229, name: "Houndoom", have: true }
    ]
  },
  {
    type: "Steel",
    team: [
      { id: 376, name: "Metagross", have: true },
      { id: 888, name: "Zacian", have: true },
      { id: 889, name: "Zamazenta", have: true },
      { id: 10245, name: "Origin Dialga", have: true },
      { id: 10155, name: "Dusk Necrozma", have: false },
      { id: 809, name: "Melmetal", have: true }
    ]
  },
  {
    type: "Fairy",
    team: [
      { id: 888, name: "Zacian", have: true },
      { id: 468, name: "Togekiss", have: true },
      { id: 858, name: "Hatterene", have: false },
      { id: 730, name: "Primarina", have: false },
      { id: 700, name: "Sylveon", have: true },
      { id: 210, name: "Granbull", have: true }
    ]
  }
];