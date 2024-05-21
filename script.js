const container = document.getElementById('container');

function createGrid(size) {
    // Clear any existing grid items
    container.innerHTML = '';

    // Create the grid items
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = "#" + randomColor;
        });
        container.appendChild(div);
    }

    // Adjust the CSS to fit the new grid size
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.flex = `0 0 calc(100% / ${size})`;
        item.style.paddingTop = `calc(100% / ${size})`; // Maintain square aspect ratio
        let opacity = 0;
        item.addEventListener('mouseover', () => {
            if (opacity < 1) {
                opacity += 0.1;
                item.style.opacity = opacity;
            }
        })
    });
}

function changeGrid() {
    const size = document.getElementById('gridSize').value;
    createGrid(size);
}

// Create a default 16x16 grid
createGrid(16);
