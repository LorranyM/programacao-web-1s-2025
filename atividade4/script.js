document.addEventListener('DOMContentLoaded', function()){

     // Variáveis para os elementos HTML
     const incrementButton = document.getElementById('botao1');
     const textInput = document.getElementById('textInput');

      // Adicionar texto dinâmico ao pressionar Enter
    textInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && textInput.value.trim() !== '') {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = textInput.value;
            dynamicText.appendChild(newParagraph);
            textInput.value = ''; // Limpa o campo de entrada após adicionar
        }
    });

     // Adicionar novo item (lista)
     addItemButton.addEventListener('click', function ()) {
        const listType = itemType.value; // Verifica o tipo de lista selecionada
        const newList = document.createElement(listType);

    // Evento para adicionar o item
     incrementButton.addEventListener('click', function () {
        counter++;
        counterDisplay.textContent = counter;
    });

}