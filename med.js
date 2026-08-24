// Executa o código assim que a página terminar de carregar
document.addEventListener('DOMContentLoaded', function() {
    const tabelaCorpo = document.querySelector('table tbody');

    // 1. Pega a lista de prontuários salva no navegador
    let listaProntuarios = JSON.parse(localStorage.getItem('prontuarios')) || [];

    // Limpa a tabela antes de desenhar
    tabelaCorpo.innerHTML = '';

    // 2. Se não houver nenhum prontuário, mostra uma mensagem na tabela
    if (listaProntuarios.length === 0) {
        tabelaCorpo.innerHTML = `
            <tr>
                <td colspan="4" class="texto-centralizado" style="padding: 20px; color: #777;">
                    Nenhum prontuário registrado até o momento.
                </td>
            </tr>
        `;
        return;
    }

    // 3. Varre a lista de prontuários e desenha cada um como uma linha da tabela
    listaProntuarios.forEach((prontuario, index) => {
        const novaLinha = document.createElement('tr');

        novaLinha.innerHTML = `
            <td>${prontuario.nome}</td>
            <td>${prontuario.idade}</td>
            <td>${prontuario.sintomas} (${prontuario.diagnostico})</td>
            <td class="texto-centralizado">
                <button onclick="excluirProntuario(${index})">Finalizar Caso</button>
            </td>
        `;

        tabelaCorpo.appendChild(novaLinha);
    });
});

// Função para apagar um prontuário da lista
function excluirProntuario(index) {
    let listaProntuarios = JSON.parse(localStorage.getItem('prontuarios')) || [];
    
    // Remove o item clicado da lista
    listaProntuarios.splice(index, 1);
    
    // Atualiza o banco do navegador
    localStorage.setItem('prontuarios', JSON.stringify(listaProntuarios));
    
    // Recarrega a página para atualizar a tabela visualmente
    window.location.reload();
}
