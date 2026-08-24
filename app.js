// Captura o formulário do HTML através do ID
const formProntuario = document.getElementById('form-prontuario');

// Escuta o evento de "submit" (quando o usuário clica no botão salvar)
formProntuario.addEventListener('submit', function(event) {
    // Evita que a página recarregue e limpe os dados salvos
    event.preventDefault();

    // Captura os valores de cada campo digitado pelo usuário
    const nomePaciente = document.getElementById('nome').value;
    const idadePaciente = document.getElementById('idade').value;
    const sintomasPaciente = document.getElementById('sintomas').value;
    const diagnosticoPaciente = document.getElementById('diagnostico').value;

    // Cria um objeto organizado com as informações do prontuário
    const dadosProntuario = {
        nome: nomePaciente,
        idade: idadePaciente,
        sintomas: sintomasPaciente,
        diagnostico: diagnosticoPaciente,
        dataRegistro: new Date().toLocaleString('pt-BR') // Salva a data e hora atual
    };

    // Mostra os dados no console do navegador (F12) para testes
    console.log("Prontuário capturado com sucesso:", dadosProntuario);

    // Exibe uma mensagem de sucesso na tela para o usuário
    alert(`Prontuário do paciente ${dadosProntuario.nome} foi registrado com sucesso!`);

    // Limpa o formulário para o próximo preenchimento
    formProntuario.reset();
});
