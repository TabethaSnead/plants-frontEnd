const createForm = document.querySelector('form');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(createForm);

    const name = formData.get('name');
    const img_url = formData.get('img_url');
    const is_herb = formData.get('is_herb');
    const is_perennial = formData.get('is_perennial');

    const plantData = {
        name,
        img_url,
        is_herb: is_herb ? true : false,
        is_perennial: is_perennial ? true : false,
    };

    console.log(plantData);

    const res = await fetch('http://localhost:7890/plants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(plantData),
    });
    const json = await res.json();
    location.href = '/';
});
