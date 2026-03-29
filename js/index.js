document.addEventListener('DOMContentLoaded', () => {
    // ---- 1. Lógica de Armazenamento do Perfil Ativo ----
    // Seleciona todos os links de perfil na página inicial através da classe pai
    const profileLinks = document.querySelectorAll('.profile a');

    // Mapeia cada link individualmente para ouvir o clique
    profileLinks.forEach(link => {
        link.addEventListener('click', () => {
            // "Pega" a imagem e o texto (nome) antes da navegação do link (href) acontecer
            const profileImgTag = link.querySelector('img');
            const profileNameTag = link.querySelector('span');

            // Cria um objeto/dicionário agrupando a imagem (caminho relativo limpo) e o nome literal
            const activeProfile = {
                name: profileNameTag.textContent,
                image: profileImgTag.getAttribute('src')
            };

            // Converte esse objeto pra JSON e grava num "cofre" (localStorage) do lado do cliente/navegador
            localStorage.setItem('netflix_active_profile', JSON.stringify(activeProfile));
            
            // Obs: Como os links já tem o href preenchido no index.html 
            // ("./catalogo/catalogo.html"), a navegação ainda ocorre normalmente,
            // mas depois que essa nossa rotina já salvou o perfil com sucesso.
        });
    });

    // ---- 2. Lógica do Modo Claro / Escuro (Recuperada para este novo arquivo) ----
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // O if impede que páginas como o catalogo (que podem não ter esse botão) reportem erros de JS no console
    if (themeToggleBtn) { 
        const savedTheme = localStorage.getItem('netflix_theme');
        
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeToggleBtn.textContent = '🌙';
        } else {
            themeToggleBtn.textContent = '☀️';
        }

        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            if (body.classList.contains('light-mode')) {
                themeToggleBtn.textContent = '🌙';
                localStorage.setItem('netflix_theme', 'light');
            } else {
                themeToggleBtn.textContent = '☀️';
                localStorage.setItem('netflix_theme', 'dark');
            }
        });
    }
});