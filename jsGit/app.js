const searchInput = document.getElementById('search-input');
const autocompleteList = document.getElementById('autocomplete-list');
const repoList = document.getElementById('repo-list');

let timeout = null;

function debounce(func, delay) {
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}

async function searchRepos(query) {
    if (!query) {
        autocompleteList.innerHTML = '';
        return;
    }
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}&per_page=5`);
    const data = await response.json();
    displayAutocomplete(data.items);
}

function displayAutocomplete(repos) {
    autocompleteList.innerHTML = '';
    repos.forEach(repo => {
        const div = document.createElement('div');
        div.classList.add('autocomplete-item');
        div.textContent = repo.name;
        div.addEventListener('click', () => addRepo(repo));
        autocompleteList.appendChild(div);
    });
}

function addRepo(repo) {
    const li = document.createElement('li');
    li.classList.add('repo-item');
    li.innerHTML = `
        <div class="repo-info">
            <strong>Name: ${repo.name}</strong><br>
            Owner: ${repo.owner.login}<br>
            Stars: ${repo.stargazers_count}
        </div>
        <button class="delete-btn">X</button>
    `;
    li.querySelector('.delete-btn').addEventListener('click', () => li.remove());
    repoList.appendChild(li);
    searchInput.value = '';
    autocompleteList.innerHTML = '';
}

searchInput.addEventListener('input', debounce(() => {
    searchRepos(searchInput.value);
}, 500));