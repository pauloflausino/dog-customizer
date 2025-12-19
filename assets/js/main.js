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
    dogForm.onsubmit = async (e) => {
        e.preventDefault();

        // 1. Captura o container que tem a imagem + texto
        const container = document.getElementById('imageContainer');
        
        // 2. Transforma o HTML em um Canvas e depois em Base64
        const canvas = await html2canvas(container, { useCORS: true });
        const imageData = canvas.toDataURL('image/png');

        // 3. Prepara os dados para o LocalStorage (como antes)
        const config = {
            breed: breedSelect.value,
            name: document.getElementById('dogName').value,
            date: new Date().toLocaleString()
        };
        localStorage.setItem('dogApp_data', JSON.stringify(config));

        // 4. ENVIA PARA O BACKEND (PHP) salvar na pasta local
        const formData = new FormData();
        formData.append('image', imageData);
        formData.append('name', config.name);

        fetch('api/save_image.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                const alert = document.getElementById('alertMsg');
                alert.textContent = "Salvo no LocalStorage e na pasta /uploads!";
                alert.classList.remove('d-none');
                setTimeout(() => alert.classList.add('d-none'), 3000);
            }
        });
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


