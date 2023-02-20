(async () => {
    const res = await fetch('http://localhost:7890/plants');
    const plants = await res.json();
    const ul = document.querySelector('ul');
    console.log(plants);

    for (let plant of plants) {
        const li = document.createElement('li');
        const name = document.createElement('h3');
        const img = document.createElement('img');
        const is_herb = document.createElement('p');
        const is_perennial = document.createElement('p');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', async () => {
            const res = await fetch(`http:localhost:7890/plants/${plant.id}`, {
                method: 'DELETE',
            });
            const json = await res.json();
            if (json[0]) {
                li.remove();
            }
        });
        name.textContent = plant.name;
        img.src = plant.img_url;
        is_herb.textContent = 'Is This an Herb?' + plant.is_herb;
        is_perennial.textContent = 'Is This a Perennial?' + plant.is_perennial;

        li.append(name, img, is_herb, is_perennial, deleteButton);
        ul.append(li);
    }
})();
