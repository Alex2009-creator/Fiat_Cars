let btnParagraph = document.querySelector('#btn_p');
let paragraph = document.getElementsByTagName('p');
let flag;

btnParagraph.onclick = function () {

    if (!flag) {
        for (let i = 0; i < paragraph.length; i++) {
            paragraph[i].style.display = 'block';
        }

        btnParagraph.textContent = 'Скрыть текст';
        flag = true;
    } else {
        for (let i = 0; i < paragraph.length; i++) {
            paragraph[i].style.display = 'none';
        }

        btnParagraph.textContent = 'Показать текст';
        flag = false;
    }
}