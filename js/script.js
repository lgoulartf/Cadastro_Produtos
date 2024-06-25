let listaProdutos = JSON.parse(localStorage.getItem('produtos')) || [];

let productName = document.querySelector('#productName')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let productDesc = document.querySelector('#productDesc')
let labelDesc = document.querySelector('#labelDesc')
let validDesc = false

let productPrice = document.querySelector('#productPrice')
let labelPreco = document.querySelector('#labelPreco')
let validPreco = false

let msgError = document.querySelector('#msgError')

$(document).ready(function () {
    checkFields();
    mostrarProdutos();
});

function checkFields() { 
    productName.addEventListener('blur', () => {
        if(productName.value.length == 0){        
            labelNome.setAttribute('style', 'color: red')
            labelNome.innerHTML = '<strong>Nome do Produto: (Este campo é obrigatório.)</strong>'
            productName.setAttribute('style', 'border-color: red', 'autofocus')
            validNome = false
        }else {
            labelNome.setAttribute('style', 'color: green')
            labelNome.innerHTML = 'Nome do Produto:'
            productName.setAttribute('style', 'border-color: green')
            validNome = true
        }
    })
    
    productDesc.addEventListener('blur', () => {
        if(productDesc.value.length == 0){
            labelDesc.setAttribute('style', 'color: red')
            labelDesc.innerHTML = '<strong>Descrição do Produto: (Este campo é obrigatório.)</strong>'
            productDesc.setAttribute('style', 'border-color: red')
            validDesc = false
        }else {
            labelDesc.setAttribute('style', 'color: green')
            labelDesc.innerHTML = 'Descrição do Produto:'
            productDesc.setAttribute('style', 'border-color: green')
            validDesc = true
        }
    })
    
    productPrice.addEventListener('blur', () => {
        if(productPrice.value == 0){
            labelPreco.setAttribute('style', 'color: red')
            labelPreco.innerHTML = '<strong>Preço do Produto: (O valor não pode ser 0.)</strong>'
            productPrice.setAttribute('style', 'border-color: red')
            validPreco = false
        }else {
            labelPreco.setAttribute('style', 'color: green')
            labelPreco.innerHTML = 'Preço do Produto:'
            productPrice.setAttribute('style', 'border-color: green')
            validPreco = true
        }
    })
}


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

function validarCampos(){    
    if(validNome && validDesc && validPreco){        
        cadastrarProduto()                
    }else {
        event.preventDefault()
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Por favor, preencha todos os campos obrigatórios!</strong>'
    }
}

function cadastrarProduto() {      

    item = {}
    item["nomeProduto"] = $('[name="nomeProduto"]').val();
    item["descProduto"] = $('[name="descProduto"]').val();
    item["precoProduto"] = $('[name="precoProduto"]').val();
    item["dispVenda"] = $('[name="dispVenda"]:checked').val();    

    listaProdutos.push(item);
    saveToStorage(listaProdutos);
    showTable();
}

function saveToStorage(obj) {
    localStorage.setItem('produtos', JSON.stringify(obj));
}