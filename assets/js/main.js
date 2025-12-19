document.addEventListener('DOMContentLoaded', () => {
    const breedSelect = document.getElementById('breedSelect');
    const dogImage = document.getElementById('dogImage');
    const textOverlay = document.getElementById('textOverlay');
    const dogForm = document.getElementById('dogForm');

    // Inicialização: Busca raças
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(r => r.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const opt = new Option(breed.toUpperCase(), breed);
                breedSelect.add(opt);
            });
            loadSavedData(); // Só carrega o salvo após ter as raças
        });

    // Evento ao trocar raça: busca nova imagem
    breedSelect.addEventListener('change', async () => {
        const res = await fetch(`https://dog.ceo/api/breed/${breedSelect.value}/images/random`);
        const data = await res.json();
        dogImage.src = data.message;
    });

    // Preview em tempo real
    const updatePreview = () => {
        textOverlay.textContent = document.getElementById('dogName').value;
        textOverlay.style.color = document.getElementById('fontColor').value;
        textOverlay.style.fontFamily = document.getElementById('fontFamily').value;
    };

    ['dogName', 'fontColor', 'fontFamily'].forEach(id => {
        document.getElementById(id).addEventListener('input', updatePreview);
    });

    // Salvar no LocalStorage
    dogForm.onsubmit = (e) => {
        e.preventDefault();
        const config = {
            breed: breedSelect.value,
            name: document.getElementById('dogName').value,
            color: document.getElementById('fontColor').value,
            font: document.getElementById('fontFamily').value,
            img: dogImage.src,
            date: new Date().toLocaleString()
        };
        localStorage.setItem('dogApp_data', JSON.stringify(config));

        const alert = document.getElementById('alertMsg');
        alert.classList.remove('d-none');
        setTimeout(() => alert.classList.add('d-none'), 2000);
    };

    function loadSavedData() {
        const saved = JSON.parse(localStorage.getItem('dogApp_data'));
        if (saved) {
            breedSelect.value = saved.breed;
            document.getElementById('dogName').value = saved.name;
            document.getElementById('fontColor').value = saved.color;
            document.getElementById('fontFamily').value = saved.font;
            dogImage.src = saved.img;
            updatePreview();
        }
    }
});