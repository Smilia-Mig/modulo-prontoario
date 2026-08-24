// Executa o código assim que a página terminar de carregar
document.addEventListener('DOMContentLoaded', function() {
    const tabelaCorpo = document.querySelector('table tbody');

    // 1. Pega a lista de prontuários salva no navegador
    let listaProntuarios = JSON.parse(localStorage.getItem('prontuarios')) || [];

    // Limpa a linha estática de exemplo que existia no HTML
    tabelaCorpo.innerHTML = '';

    // 2. Se não houver nenhum prontuário, mostra uma mensagem na tabela
    if (listaProntuarios.length === 0) {
        tabelaCorpo.innerHTML = `
            <tr>
                <td colspan="4" style="padding: 20px; text-align: center; color: #777;">
                    Nenhum prontuário registrado até o momento.
                </td>
            </tr>
        `;
        return;
    }

    // 3. Varre a lista de prontuários e desenha cada um como uma linha da tabela
    listaProntuarios.forEach((prontuario, index) => {
        const novaLinha = document.createElement('tr');
        novaLinha.style.borderBottom = '1px solid #ccc';

        novaLinha.innerHTML = `
            <td style="padding: 10px;">${prontuario.nome}</td>
            <td style="padding: 10px;">${prontuario.idade}</td>
            <td style="padding: 10px;">${prontuario.sintomas} (${prontuario.diagnostico})</td>
            <td style="padding: 10px; text-align: center;">
                <button onclick="excluirProntuario(${index})" style="padding: 5px 10px; background-color: #dc3545; font-size: 12px; width: auto; color: white; border: none; border-radius: 4px; cursor: pointer;">Finalizar Caso</button>
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
