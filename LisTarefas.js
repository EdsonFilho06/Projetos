// Obtém o input e a lista
var inputTarefa = document.getElementById('inputTarefa');
var listaTarefas = document.getElementById('listaTarefas');

// Adiciona um ouvinte de eventos para capturar a tecla Enter pressionada
inputTarefa.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    adicionarTarefa(inputTarefa.value);
    inputTarefa.value = ''; // Limpa o input após adicionar a tarefa
  }
});

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa(texto) {
  if (texto.trim() !== '') { // Verifica se o texto não está vazio
    var novaTarefa = document.createElement('li');
    novaTarefa.className = 'tarefa';
    novaTarefa.innerHTML = `
      <span>${texto}</span>
      <button class="botaoExcluir" onclick="removerTarefa(this)">Excluir</button>
    `;
    listaTarefas.appendChild(novaTarefa);
  }
}

// Função para remover uma tarefa da lista
function removerTarefa(botao) {
  var tarefa = botao.parentElement;
  listaTarefas.removeChild(tarefa);
}
