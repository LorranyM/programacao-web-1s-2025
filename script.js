document.addEventListener('DOMContentLoaded', function () {
    // Variáveis para os elementos HTML
    const incrementButton = document.getElementById('botao1');
    const decrementButton = document.getElementById('botao2');
    const counterDisplay = document.getElementById('contador');
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');
    const addItemButton = document.getElementById('addItemButton');
    const itemType = document.getElementById('itemType');
    const resetButton = document.getElementById('resetButton');
    const dynamicText = document.getElementById('dynamicText');
    const itemList = document.getElementById('itemList');

    // Inicialização do contador
    let counter = 0;

    // Evento para incrementar o contador
    incrementButton.addEventListener('click', function () {
        counter++;
        counterDisplay.textContent = counter;
    });

    // Evento para decrementar o contador
    decrementButton.addEventListener('click', function () {
        if (counter > 0) {
            counter--;
            counterDisplay.textContent = counter;
        } else {
            alert("O contador já está em zero!");
        }
    });

    // Contador de caracteres (sem contar espaços)
    textInput.addEventListener('input', function () {
        const textLength = textInput.value.replace(/\s/g, '').length; // Remove espaços
        charCount.textContent = textLength;
    });

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
    addItemButton.addEventListener('click', function () {
        const listType = itemType.value; // Verifica o tipo de lista selecionada
        const newList = document.createElement(listType);
        
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${Math.floor(Math.random() * 100) + 1}`; // Texto do item com número aleatório
        newList.appendChild(listItem);
