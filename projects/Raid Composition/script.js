// Type colors
const TYPE_COLORS = {
  Fire: "#F08030",
  Water: "#6890F0",
  Electric: "#F8D030",
  Grass: "#78C850",
  Ice: "#98D8D8",
  Fighting: "#C03028",
  Poison: "#A040A0",
  Ground: "#E0C068",
  Flying: "#A890F0",
  Psychic: "#F85888",
  Bug: "#A8B820",
  Rock: "#B8A038",
  Ghost: "#705898",
  Dragon: "#7038F8",
  Dark: "#705848",
  Steel: "#B8B8D0",
  Fairy: "#EE99AC"
};

// Types whose color is light enough that dark text reads better on it than white.
const DARK_TEXT_TYPES = new Set(["Electric", "Ice", "Ground", "Steel"]);

// DOM Elements
const typeGrid = document.getElementById("typeGrid");
const statOverall = document.getElementById("statOverall");
const statOwned = document.getElementById("statOwned");
const statTypesReady = document.getElementById("statTypesReady");
const statNeedsWork = document.getElementById("statNeedsWork");

function typeSlug(type) {
  return type.toLowerCase();
}

// Returns { have, total, percent } for one type's team
function teamStats(team) {
  const have = team.filter((p) => p.have).length;
  const total = team.length;
  return { have, total, percent: total === 0 ? 0 : Math.round((have / total) * 100) };
}

// Build the four summary stat cards at the top
function renderStats() {
  let totalHave = 0;
  let totalSlots = 0;
  let typesReady = 0;
  let worst = null;

  raidTeams.forEach(({ type, team }) => {
    const { have, total, percent } = teamStats(team);
    totalHave += have;
    totalSlots += total;
    if (have === total) typesReady++;
    if (!worst || percent < worst.percent) worst = { type, percent };
  });

  const overallPercent = Math.round((totalHave / totalSlots) * 100);

  statOverall.textContent = `${overallPercent}%`;
  statOwned.textContent = `${totalHave} / ${totalSlots}`;
  statTypesReady.textContent = `${typesReady} / ${raidTeams.length}`;
  statNeedsWork.textContent = worst ? `${worst.type} (${worst.percent}%)` : "—";
}

// Build one panel per type, each with its 6-slot squad
function renderTypeGrid() {
  typeGrid.innerHTML = raidTeams
    .map(({ type, team }) => {
      const { have, total } = teamStats(team);
      const color = TYPE_COLORS[type];
      const badgeTextColor = DARK_TEXT_TYPES.has(type) ? "#2a2a2a" : "#fff";

      const slotsHtml = team
        .map((p) => {
          const hubUrl = `https://db.pokemongohub.net/pokemon/${p.id}`;
          const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
          const stateClass = p.have ? "have" : "missing";
          return `
            <a class="slot ${stateClass}" href="${hubUrl}" target="_blank" rel="noopener" style="--accent: ${color};">
              <div class="slot-sprite-frame">
                <img class="slot-sprite" src="${spriteUrl}" alt="${p.name}" loading="lazy">
              </div>
              <span class="slot-name">${p.name}</span>
            </a>
          `;
        })
        .join("");

      return `
        <section class="type-card" style="--accent: ${color};">
          <header class="type-card-header">
            <span class="type-pill" style="background:${color}; color:${badgeTextColor};">${type}</span>
            <span class="type-progress-label">${have}/${total}</span>
          </header>
          <div class="slot-grid">
            ${slotsHtml}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderAll() {
  renderStats();
  renderTypeGrid();
}

renderAll();
