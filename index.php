<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Dog Designer 2025</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Pacifico&family=Lobster&family=Bebas+Neue&family=Montserrat&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="bg-light">

<div class="container py-5">
    <div class="row">
        <div class="col-md-4">
            <div class="card shadow border-0 p-4">
                <h3 class="mb-4">Configurações</h3>
                <form id="dogForm">
                    <label class="form-label">Raça do Cachorro</label>
                    <select id="breedSelect" class="form-select mb-3" required></select>

                    <label class="form-label">Nome Personalizado</label>
                    <input type="text" id="dogName" class="form-control mb-3" placeholder="Digite o nome...">

                    <label class="form-label">Cor da Fonte</label>
                    <select id="fontColor" class="form-select mb-3">
                        <option value="white">Branco</option>
                        <option value="yellow">Amarelo</option>
                        <option value="cyan">Ciano</option>
                        <option value="lime">Verde Lima</option>
                        <option value="magenta">Rosa Choque</option>
                    </select>

                    <label class="form-label">Estilo da Fonte</label>
                    <select id="fontFamily" class="form-select mb-4">
                        <option value="'Roboto', sans-serif">Roboto (Clean)</option>
                        <option value="'Pacifico', cursive">Pacifico (Script)</option>
                        <option value="'Lobster', cursive">Lobster (Retro)</option>
                        <option value="'Bebas Neue', sans-serif">Bebas (Bold)</option>
                        <option value="'Montserrat', sans-serif">Montserrat</option>
                    </select>

                    <button type="submit" class="btn btn-primary w-100 fw-bold">SALVAR</button>
                </form>
                <div id="alertMsg" class="alert alert-success mt-3 d-none">Salvo com sucesso!</div>
            </div>
        </div>

        <div class="col-md-8 text-center">
            <div class="preview-card">
                <div id="imageContainer" class="position-relative d-inline-block shadow rounded overflow-hidden">
                    <img id="dogImage" src="https://via.placeholder.com/600x400?text=Escolha+uma+Raça" class="img-fluid">
                    <div id="textOverlay" class="text-overlay"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="assets/js/main.js"></script>
</body>
</html>