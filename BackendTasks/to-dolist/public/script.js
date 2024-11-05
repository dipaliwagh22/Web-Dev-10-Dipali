const nameInput = document.getElementById('nameInput');
const addBtn = document.getElementById('addBtn');
const nameList = document.getElementById('nameList');

async function fetchNames() {
    const response = await fetch('/api/names');
    const names = await response.json();
    nameList.innerHTML = '';
    names.forEach(name => {
        const nameItem = document.createElement('div');
        nameItem.classList.add('name-item');
        nameItem.innerHTML = `
            <span>${name.name}</span>
            <button onclick="editName('${name._id}', '${name.name}')">Edit</button>
            <button onclick="deleteName('${name._id}')">Delete</button>
        `;
        nameList.appendChild(nameItem);
    });
}

addBtn.addEventListener('click', async () => {
    const name = nameInput.value;
    if (name) {
        await fetch('/api/names', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name }),
        });
        nameInput.value = '';
        fetchNames();
    }
});

async function editName(id, currentName) {
    const newName = prompt('Edit name:', currentName);
    if (newName) {
        await fetch(`/api/names/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName }),
        });
        fetchNames();
    }
}

async function deleteName(id) {
    await fetch(`/api/names/${id}`, { method: 'DELETE' });
    fetchNames();
}

fetchNames();
