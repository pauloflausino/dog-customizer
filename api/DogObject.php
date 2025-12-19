<?php
namespace App\Models;

class DogConfig {
    private $breed;
    private $name;
    private $color;
    private $font;
    private $imageUrl;
    private $timestamp;

    public function __construct($breed, $name, $color, $font, $imageUrl) {
        $this->breed = htmlspecialchars($breed);
        $this->name = htmlspecialchars($name);
        $this->color = $color;
        $this->font = $font;
        $this->imageUrl = $imageUrl;
        $this->timestamp = date('d/m/Y H:i:s');
    }

    // Método para preparar os dados para o LocalStorage ou DB
    public function toArray() {
        return [
            'breed' => $this->breed,
            'name' => $this->name,
            'color' => $this->color,
            'font' => $this->font,
            'imageUrl' => $this->imageUrl,
            'date' => $this->timestamp
        ];
    }
}