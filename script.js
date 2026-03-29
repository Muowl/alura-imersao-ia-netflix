// Aguarda o HTML completo ser lido antes de executar a lógica
document.addEventListener('DOMContentLoaded', () => {
    // Busca e seleciona o nosso botão pelo ID criado no HTML
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Checa se o usuário já havia escolhido um tema durante uma visita passada (usando Cache Local do PC/Celular)
    const savedTheme = localStorage.getItem('netflix_theme');
    
    // Se a memória acusa que ele preferiu o Light na última vez...
    if (savedTheme === 'light') {
        body.classList.add('light-mode'); // Adiciona a classe visual de light-mode imediatamente
        themeToggleBtn.textContent = '🌙'; // O ícone fica Lua para permitir ele 'desligar' o modo claro depois
    } else {
        // Se tinha nada, ou já estava Dark... Deixa padrão!
        themeToggleBtn.textContent = '☀️'; // Sol esperando pra ser pressionado!
    }

    // Ativa o ouvido eletrônico do JavaScript (Fica aguardando um Click)
    themeToggleBtn.addEventListener('click', () => {
        
        // toggle(): função fantástica - Se ter a classe .light-mode na lista visual, ele arranca. Se não tiver, ele infinca!
        body.classList.toggle('light-mode'); 

        // Confere como a classe visual do site ficou logicamente após apertar
        if (body.classList.contains('light-mode')) {
            themeToggleBtn.textContent = '🌙'; // Modo claro está on -> O botão assume a lua (Manda pra noite de novo!)
            localStorage.setItem('netflix_theme', 'light'); // Adiciona/grava a preferência permanente dele na máquina.
        } else {
            themeToggleBtn.textContent = '☀️'; // Voltou pro escuro de fábrica da Netflix -> Mostra pra ele o sol de opção reversa
            localStorage.setItem('netflix_theme', 'dark'); // Apaga o log do claro.
        }
    });
});
