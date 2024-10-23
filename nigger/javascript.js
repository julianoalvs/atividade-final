// Função para carregar e exibir os usuários salvos no LocalStorage
function carregarUsuarios() {
    const listaUsuarios = document.getElementById('usuarios-lista');
    listaUsuarios.innerHTML = ''; // Limpa a lista antes de carregar

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `${usuario.nome} - ${usuario.email}`;
        listaUsuarios.appendChild(li);
    });
}

// Função para salvar um novo usuário no LocalStorage
function salvarUsuario(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome && email) {
        const novoUsuario = { nome, email };

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        carregarUsuarios(); // Atualiza a lista
        document.getElementById('cadastro-form').reset(); // Limpa o formulário
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

// Adiciona o evento de submissão ao formulário
document.getElementById('cadastro-form').addEventListener('submit', salvarUsuario);

// Carrega os usuários ao abrir a página
carregarUsuarios();
