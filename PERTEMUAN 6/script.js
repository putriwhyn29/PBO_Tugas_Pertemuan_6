let speciesData = [];

function updateTable() {
    const speciesList = document.getElementById("species-list");
    speciesList.innerHTML = "";  

    speciesData.forEach((species, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${species.name}</td>
            <td>${species.habitat}</td>
            <td>${species.status}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="confirmEdit(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="confirmDelete(${index})">Delete</button>
            </td>
        `;

        speciesList.appendChild(row);
    });
}

document.getElementById("species-form").addEventListener("submit", function(event) {
    event.preventDefault();  

    const name = document.getElementById("species-name").value;
    const habitat = document.getElementById("species-habitat").value;
    const status = document.getElementById("species-status").value;

    speciesData.push({ name, habitat, status });

    this.reset();

    updateTable();
});

function confirmDelete(index) {
    const confirmation = window.confirm("Apakah Anda yakin ingin menghapus spesies ini?");
    if (confirmation) {
        deleteSpecies(index);
    }
}

function deleteSpecies(index) {
    speciesData.splice(index, 1);  
    updateTable();  
}

function confirmEdit(index) {
    const confirmation = window.confirm("Apakah Anda yakin ingin mengedit spesies ini?");
    if (confirmation) {
        editSpecies(index);
    }
}

function editSpecies(index) {
    const species = speciesData[index];

    document.getElementById("species-name").value = species.name;
    document.getElementById("species-habitat").value = species.habitat;
    document.getElementById("species-status").value = species.status;

    deleteSpecies(index);
}
