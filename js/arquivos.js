function showContent(section) {
    document.querySelectorAll('.content').forEach(div => {
        div.classList.remove('active');
    });
    document.getElementById(section).classList.add('active');
}
showContent('arquivos');