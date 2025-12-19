# 🐾 Dog Designer Pro

Uma aplicação interativa que utiliza a **Dog API** para permitir que usuários escolham raças de cachorros, personalizem nomes com diferentes fontes e cores, e visualizem o resultado em tempo real. Os dados são persistidos localmente para garantir que a experiência seja mantida após o recarregamento da página.



## 🚀 Tecnologias Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript (ES6+).
* **Framework CSS:** [Bootstrap 5](https://getbootstrap.com/) (Layout responsivo e componentes).
* **Backend (Estrutura):** PHP 8.x (Arquitetura de objetos).
* **API Externa:** [Dog API](https://dog.ceo/dog-api/).
* **Fonts:** [Google Fonts](https://fonts.google.com/) (Integração de 5 famílias distintas).
* **Armazenamento:** LocalStorage (Persistência no navegador).

## 🛠️ Funcionalidades

- [x] **Listagem de Raças:** Busca dinâmica de todas as raças disponíveis via API.
- [x] **Preview em Tempo Real:** O nome digitado aparece sobre a imagem do pet instantaneamente.
- [x] **Customização de Estilo:** Seleção de 5 cores e 5 fontes tipográficas diferentes.
- [x] **Persistência de Dados:** Salva a configuração atual, incluindo a URL da imagem e o carimbo de data/hora (timestamp).
- [x] **Feedback ao Usuário:** Mensagem de sucesso ao salvar os dados.
- [x] **Estado Consistente:** Ao recarregar a página, as últimas configurações salvas são recuperadas automaticamente.

## 📂 Estrutura do Projeto

```text
dog-customizer/
├── api/
│   └── DogObject.php      # Classe PHP representando o objeto de configuração
├── assets/
│   ├── css/
│   │   └── style.css      # Estilização customizada e overlay de texto
│   └── js/
│       └── main.js        # Lógica de consumo da API, DOM e LocalStorage
├── index.php              # Interface principal estruturada com Bootstrap
└── README.md              # Documentação do projeto