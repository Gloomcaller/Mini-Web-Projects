// Players
const PLAYERS = [
  { name: "Gloomcaller", tagClass: "tag-gloomcaller" },
  { name: "Stanveres", tagClass: "tag-stanveres" }
];

// Display order
const TAG_ORDER = ["Pokedex", "PvP", "Raider", "Mega", "Lucky", "Cool"];

function sortTags(tags) {
  return [...tags].sort((a, b) => {
    const rankA = TAG_ORDER.indexOf(a);
    const rankB = TAG_ORDER.indexOf(b);
    const safeA = rankA === -1 ? TAG_ORDER.length : rankA;
    const safeB = rankB === -1 ? TAG_ORDER.length : rankB;
    if (safeA !== safeB) return safeA - safeB;
    return a.localeCompare(b);
  });
}

// State
let sortState = { column: "id", ascending: true };

// DOM Elements
const tableBody = document.getElementById("pokemonTableBody");
const searchInput = document.getElementById("searchInput");
const filterPerson = document.getElementById("filterPerson");
const sortableHeaders = document.querySelectorAll("th.sortable");
const emptyState = document.getElementById("emptyState");

// Delays calling 
function debounce(fn, delay = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Needed by dropdown must match data.js
function populateFilterOptions() {
  PLAYERS.forEach(({ name }) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = `Needed by ${name}`;
    filterPerson.appendChild(opt);
  });
}

// Name to CSS class, "Fire" -> "type-fire"
function typeClass(type) {
  return `type-${type.toLowerCase()}`;
}

// Tag name to CSS class, tag == color
function tagClass(tag) {
  const known = ["lucky"];
  const lower = tag.toLowerCase();
  return known.includes(lower) ? `tag tag-${lower}` : "tag";
}

// Render the Table
function renderTable() {
  const searchQuery = searchInput.value.toLowerCase();
  const personFilter = filterPerson.value;

  const filteredList = pokemonData.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery);
    const matchesPerson =
      personFilter === "all" || p.neededBy.includes(personFilter);
    return matchesSearch && matchesPerson;
  });

  tableBody.innerHTML = "";
  emptyState.hidden = filteredList.length > 0;

  filteredList.forEach((p) => {
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
    const hubUrl = `https://db.pokemongohub.net/pokemon/${p.id}`;

    const typesHtml = p.type
      .map((t) => `<span class="type-badge ${typeClass(t)}">${t}</span>`)
      .join("");

    const tagsHtml = sortTags(p.tags)
      .map((t) => `<span class="${tagClass(t)}">${t}</span>`)
      .join("");

    const neededByHtml = PLAYERS
      .filter(({ name }) => p.neededBy.includes(name))
      .map(({ name, tagClass }) => `<span class="tag ${tagClass}">${name}</span>`)
      .join("");

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>#${p.id}</td>
      <td>
        <div class="sprite-frame">
          <img class="sprite" src="${spriteUrl}" alt="${p.name}" loading="lazy">
        </div>
      </td>
      <td><a class="pokemon-link" href="${hubUrl}" target="_blank" rel="noopener">${p.name}</a></td>
      <td>${typesHtml}</td>
      <td>${tagsHtml}</td>
      <td>${neededByHtml}</td>
    `;
    tableBody.appendChild(tr);
  });
}

// Sort Logic
function handleSort(event) {
  const column = event.currentTarget.getAttribute("data-sort");

  if (sortState.column === column) {
    sortState.ascending = !sortState.ascending;
  } else {
    sortState.column = column;
    sortState.ascending = true;
  }

  sortableHeaders.forEach((th) => (th.querySelector(".sort-icon").textContent = ""));
  event.currentTarget.querySelector(".sort-icon").textContent = sortState.ascending ? " ▲" : " ▼";

  pokemonData.sort((a, b) => {
    let valA = a[column];
    let valB = b[column];

    if (typeof valA === "string") valA = valA.toLowerCase();
    if (typeof valB === "string") valB = valB.toLowerCase();

    if (valA < valB) return sortState.ascending ? -1 : 1;
    if (valA > valB) return sortState.ascending ? 1 : -1;
    return 0;
  });

  renderTable();
}

// Event Listeners
searchInput.addEventListener("input", debounce(renderTable, 500));
filterPerson.addEventListener("change", renderTable);
sortableHeaders.forEach((header) => header.addEventListener("click", handleSort));

// Init
populateFilterOptions();
renderTable();