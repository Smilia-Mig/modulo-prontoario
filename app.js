const formProntuario = document.getElementById('form-prontuario');

formProntuario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomePaciente = document.getElementById('nome').value;
    const idadePaciente = document.getElementById('idade').value;
    const sintomasPaciente = document.getElementById('sintomas').value;
    const diagnosticoPaciente = document.getElementById('diagnostico').value;

    const novoProntuario = {
        nome: nomePaciente,
        idade: idadePaciente,
        sintomas: sintomasPaciente,
        diagnostico: diagnosticoPaciente,
        dataRegistro: new Date().toLocaleString('pt-BR')
    };

    // 1. Pega a lista de prontuários que já existe ou cria uma lista vazia se for o primeiro
    let listaProntuarios = JSON.parse(localStorage.getItem('prontuarios')) || [];

    // 2. Adiciona o novo prontuário na lista
    listaProntuarios.push(novoProntuario);

    // 3. Salva a lista atualizada de volta no banco do navegador
    localStorage.setItem('prontuarios', JSON.stringify(listaProntuarios));

    alert(`Prontuário do paciente ${novoProntuario.nome} enviado para a Área do Médico!`);
    formProntuario.reset();
});