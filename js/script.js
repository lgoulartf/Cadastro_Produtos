let listaProdutos = JSON.parse(localStorage.getItem('produtos')) || [];
$(document).ready(function () {
    mostrarProdutos();
});


function mostrarProdutos() {

    let html = '';
    for (produto of listaProdutos) {
        html += '<tr>';
        html += '<td>' + produto.nomeProduto + '</td>';
        html += '<td>' + produto.descProduto + '</td>';
        html += '<td>' + produto.precoProduto + '</td>';
        html += '<td>' + produto.dispVenda + '</td>';
        html += '</tr>';
    }

    $('#tblProdutos tbody').append(html);
}

function cadastrarProduto() {

    item = {}
    item["nomeProduto"] = $('[name="nomeProduto"]').val();
    item["descProduto"] = $('[name="descProduto"]').val();
    item["precoProduto"] = $('[name="precoProduto"]').val();
    item["dispVenda"] = $('[name="dispVenda"]:checked').val();

    //TODO: VALIDAR CAMPOS OBRIGATORIOS

    listaProdutos.push(item);
    saveToStorage(listaProdutos);

    // if (novoProduto !== "") {
    //     produtos.push(novoProduto);
    //     $('[name="nomeProduto"]').val('');
    //     removerSpans();
    //     saveToStorage();
    // } else {
    //     removerSpans();
    //     let span = document.createElement('span');
    //     span.setAttribute('class', 'alert alert-warning');
    //     let msg = document.createTextNode('Por favor, preencha todos os campos!');
    //     span.appendChild(msg);
    //     lista.appendChild(span);
    // }
}


function saveToStorage(obj) {
    localStorage.setItem('produtos', JSON.stringify(obj));
}
