// script.js
function nextPage(n) {
    let currentPage = document.getElementById('page' + (n - 1));
    let nextPage = document.getElementById('page' + n);

    currentPage.style.display = 'none';
    nextPage.style.display = 'flex';
}