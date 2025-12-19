<?php
header('Content-Type: application/json');

if (isset($_POST['image'])) {
    $img = $_POST['image'];
    $name = $_POST['name'] ?: 'dog';
    
    // Remove o cabeçalho do Base64 (data:image/png;base64,...)
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);

    // Cria um nome de arquivo único
    $fileName = 'dog_' . preg_replace("/[^a-zA-Z0-9]/", "", $name) . '_' . time() . '.png';
    $filePath = '../uploads/' . $fileName;

    // Salva o arquivo na pasta local
    if (file_put_contents($filePath, $data)) {
        echo json_encode([
            "success" => true, 
            "message" => "Imagem salva com sucesso!",
            "file" => $fileName
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "Erro ao gravar arquivo."]);
    }
}
?>