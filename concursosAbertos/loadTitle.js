document.addEventListener("DOMContentLoaded", function() {
    // URL da página que você deseja carregar
    const url = '/concursotjsp001/index.html';

    // Função para buscar e extrair o título
    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Crie um elemento temporário para armazenar o conteúdo da página
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');

            // Selecione o elemento h1 com o id title01
            const titleElement = doc.querySelector('#title01');

            // Verifique se o elemento foi encontrado e atualize o conteúdo da página principal
            if (titleElement) {
                const titleBoxAbertos = document.querySelector('#titleBoxAbertos');
                if (titleBoxAbertos) {
                    titleBoxAbertos.textContent = titleElement.textContent;
                }
            }
        })
        .catch(error => {
            console.error('Erro ao carregar o título:', error);
        });
});
