"use strict";
const lupa = document.querySelector('.lupa');
const buscaMobile = document.querySelector('.busca-mobile');
const loginBtn = document.querySelector('.cabecalho__botao');
const addProdutosBtn = document.querySelector('.produtos-add__botao');
lupa.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    buscaMobile.classList.toggle('hidden');
});
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'login.html';
});
addProdutosBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'novos-produtos.html';
});
