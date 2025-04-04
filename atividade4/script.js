document.addEventListener('DOMContentLoaded', function() {
    // Variáveis para os elementos HTML
    const botao1 = document.getElementById('botao1');
    const botao2 = document.getElementById('botao2');
    const botao3 = document.getElementById('botao3');
    const botao4 = document.getElementById('botao4');
    const textInput = document.getElementById('textInput');
    const tableBody = document.querySelector('#table tbody');
    const itemSelect = document.getElementById('itemSelect');

    let itens = [];

    // Função para adicionar item na tabela
    function addItem() {
        const itemTexto = textInput.value.trim();
        if (itemTexto !== '') {
            itens.push(itemTexto); // Adiciona item ao array
            const newRow = document.createElement('tr');
            const newCell = document.createElement('td');
            newCell.textContent = itemTexto;
            newRow.appendChild(newCell);
            tableBody.appendChild(newRow); // Adiciona item à tabela

            const newOption = document.createElement('option');
            newOption.value = itemTexto;
            newOption.textContent = itemTexto;
            itemSelect.appendChild(newOption); // Adiciona item ao menu de seleção

            textInput.value = ''; // Limpa o campo de entrada
        }
    }

    // Evento para adicionar item ao pressionar Enter
    textInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addItem();
        }
    });

    // Evento para o botão "Adicionar"
    botao1.addEventListener('click', addItem);

    // Evento para o botão "Marcar"
    botao2.addEventListener('click', function() {
        const selectedItem = itemSelect.value;
        if (selectedItem) {
            const rows = tableBody.getElementsByTagName('tr');
            for (let row of rows) {
                const cell = row.getElementsByTagName('td')[0];
                if (cell.textContent === selectedItem) {
                    row.classList.add('marked');
                    break;
                }
            }
        }
    });

    // Evento para o botão "Desmarcar"
    botao3.addEventListener('click', function() {
        const selectedItem = itemSelect.value;
        if (selectedItem) {
            const rows = tableBody.getElementsByTagName('tr');
            for (let row of rows) {
                const cell = row.getElementsByTagName('td')[0];
                if (cell.textContent === selectedItem) {
                    if (row.classList.contains('marked')) {
                        row.classList.remove('marked');
                    } else {
                        alert('Este item já está desmarcado.');
                    }
                    break;
                }
            }
        }
    });

    // Evento para o botão "Remover Item"
    botao4.addEventListener('click', function() {
        const selectedItem = itemSelect.value;
        if (selectedItem) {
            const rows = tableBody.getElementsByTagName('tr');
            for (let row of rows) {
                const cell = row.getElementsByTagName('td')[0];
                if (cell.textContent === selectedItem) {
                    tableBody.removeChild(row); // Remove item da tabela
                    for (let i = 0; i < itemSelect.options.length; i++) {
                        if (itemSelect.options[i].value === selectedItem) {
                            itemSelect.removeChild(itemSelect.options[i]); // Remove item do menu
                            break;
                        }
                    }
                    break;
                }
            }
        }
    });
});
