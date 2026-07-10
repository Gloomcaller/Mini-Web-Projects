document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-button');
    const suggestionsEl = document.getElementById('suggestions');
    const messageEl = document.getElementById('message');
    const pokemonInfo = document.getElementById('pokemon-info');
    const sprite = document.getElementById('sprite');
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonId = document.getElementById('pokemon-id');
    const typesContainer = document.getElementById('types');
    const weightEl = document.getElementById('weight');
    const heightEl = document.getElementById('height');
    const hpEl = document.getElementById('hp');
    const attackEl = document.getElementById('attack');
    const defenseEl = document.getElementById('defense');
    const spAtkEl = document.getElementById('special-attack');
    const spDefEl = document.getElementById('special-defense');
    const speedEl = document.getElementById('speed');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const shinyToggle = document.getElementById('shiny-toggle');
    const copyNameBtn = document.getElementById('copy-name-btn');

    // State
    let currentData = null;
    let shiny = false;
    let allPokemonNames = [];
    let selectedSuggestionIndex = -1;

    // Type colors
    const typeColors = {
        normal: '#A8A878', fire: '#F08030', water: '#6890F0',
        electric: '#F8D030', grass: '#78C850', ice: '#98D8D8',
        fighting: '#C03028', poison: '#A040A0', ground: '#E0C068',
        flying: '#A890F0', psychic: '#F85888', bug: '#A8B820',
        rock: '#B8A038', ghost: '#705898', dragon: '#7038F8',
        dark: '#705848', steel: '#B8B8D0', fairy: '#EE99AC'
    };

    // Pokémon names for autocomplete
    function loadPokemonList() {
        fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon?limit=10000')
            .then(response => response.json())
            .then(data => {
                allPokemonNames = data.results.map(p => p.name);
            })
            .catch(() => {
                console.warn('Could not load Pokémon list for autocomplete');
            });
    }

    // Show autocomplete suggestions
    function showSuggestions(filter) {
        const matches = allPokemonNames
            .filter(name => name.startsWith(filter.toLowerCase()))
            .slice(0, 10);

        suggestionsEl.innerHTML = '';
        if (matches.length === 0 || filter === '') {
            suggestionsEl.classList.add('hidden');
            return;
        }

        matches.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            li.addEventListener('click', () => {
                searchInput.value = name;
                suggestionsEl.classList.add('hidden');
                fetchPokemon(name);
            });
            suggestionsEl.appendChild(li);
        });

        suggestionsEl.classList.remove('hidden');
        selectedSuggestionIndex = -1;
    }

    function clearSuggestions() {
        suggestionsEl.innerHTML = '';
        suggestionsEl.classList.add('hidden');
    }

    // Clear everything
    function clearDisplay() {
        pokemonInfo.classList.add('hidden');
        messageEl.textContent = '';
        currentData = null;
    }

    function showError(msg) {
        messageEl.textContent = msg;
        pokemonInfo.classList.add('hidden');
    }

    function updateSprite() {
        if (!currentData) return;
        sprite.src = shiny && currentData.sprites.front_shiny
            ? currentData.sprites.front_shiny
            : currentData.sprites.front_default || '';
        sprite.alt = currentData.name;

        shinyToggle.classList.toggle('active', shiny);
    }

    function displayPokemon(data) {
        currentData = data;
        shiny = false;
        updateSprite();

        pokemonName.textContent = data.name.toUpperCase();
        pokemonId.textContent = `#${data.id}`;

        typesContainer.innerHTML = '';
        data.types.forEach(type => {
            const badge = document.createElement('span');
            badge.textContent = type.type.name.toUpperCase();
            badge.style.backgroundColor = typeColors[type.type.name] || '#3498db';
            typesContainer.appendChild(badge);
        });

        weightEl.textContent = data.weight;
        heightEl.textContent = data.height;
        hpEl.textContent = data.stats[0].base_stat;
        attackEl.textContent = data.stats[1].base_stat;
        defenseEl.textContent = data.stats[2].base_stat;
        spAtkEl.textContent = data.stats[3].base_stat;
        spDefEl.textContent = data.stats[4].base_stat;
        speedEl.textContent = data.stats[5].base_stat;

        messageEl.textContent = '';
        pokemonInfo.classList.remove('hidden');

        // Clear input
        searchInput.value = '';
        clearSuggestions();
    }

    function fetchPokemon(query) {
        if (!query) {
            showError('Please enter a Pokémon name or ID.');
            return;
        }
        messageEl.textContent = 'Searching...';
        pokemonInfo.classList.add('hidden');
        clearSuggestions();

        fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${query}`)
            .then(response => {
                if (!response.ok) throw new Error('Pokémon not found');
                return response.json();
            })
            .then(data => displayPokemon(data))
            .catch(error => showError(error.message));
    }

    // Search button
    searchBtn.addEventListener('click', () => {
        fetchPokemon(searchInput.value.trim().toLowerCase());
    });

    // Enter key
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            // Use the highlighted suggestion
            const activeItem = suggestionsEl.querySelector('li.active');
            const query = activeItem ? activeItem.textContent : searchInput.value.trim().toLowerCase();
            searchInput.value = query;
            clearSuggestions();
            fetchPokemon(query);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const items = suggestionsEl.querySelectorAll('li');
            if (items.length > 0) {
                selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, items.length - 1);
                items.forEach((li, i) => li.classList.toggle('active', i === selectedSuggestionIndex));
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const items = suggestionsEl.querySelectorAll('li');
            if (items.length > 0) {
                selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, 0);
                items.forEach((li, i) => li.classList.toggle('active', i === selectedSuggestionIndex));
            }
        } else if (e.key === 'Escape') {
            clearSuggestions();
        }
    });

    // Input autocomplete
    searchInput.addEventListener('input', () => {
        const val = searchInput.value.trim().toLowerCase();
        if (val) {
            showSuggestions(val);
        } else {
            clearSuggestions();
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.autocomplete-wrapper')) {
            clearSuggestions();
        }
    });

    // Navigation
    prevBtn.addEventListener('click', () => {
        if (currentData && currentData.id > 1) {
            fetchPokemon(String(currentData.id - 1));
        }
    });
    nextBtn.addEventListener('click', () => {
        if (currentData) {
            fetchPokemon(String(currentData.id + 1));
        }
    });

    // Shiny toggle
    shinyToggle.addEventListener('click', () => {
        if (!currentData) return;
        shiny = !shiny;
        updateSprite();
    });

    // Copy name
    copyNameBtn.addEventListener('click', () => {
        if (!currentData) return;
        const name = currentData.name.toUpperCase();
        navigator.clipboard.writeText(name).then(() => {
            copyNameBtn.style.background = '#2ecc71';
            setTimeout(() => { copyNameBtn.style.background = ''; }, 1200);
        });
    });

    // Load autocomplete data on startup
    loadPokemonList();
});