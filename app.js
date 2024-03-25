document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const input = document.getElementById("nova-tarefa");
  const listaTarefas = document.querySelector("#tarefas ul");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (input.value.trim() === "") {
      alert("Por favor, insira uma tarefa válida!");
      return;
    }

    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = input.value;

    listaTarefas.appendChild(novaTarefa);

    input.value = "";
  });
});
