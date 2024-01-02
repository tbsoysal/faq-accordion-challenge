const answers = document.querySelectorAll('.answer');
const imgElements = document.querySelectorAll('.question-container img');

imgElements.forEach(img => {
    img.addEventListener('keypress', (e) => {
        if(e.key == 'Enter'){
            img.click();
        }
    })
})

imgElements.forEach((el, index) => {
    el.addEventListener('click', () => toggleIcon(index));
})

function toggleIcon(i) {
    //change icons
    if(imgElements[i].attributes[0].value == './assets/images/icon-minus.svg'){
        imgElements[i].attributes[0].value = './assets/images/icon-plus.svg';
    }else {
        imgElements[i].attributes[0].value = './assets/images/icon-minus.svg';
    }

    //hide or show answers
    answers[i].classList.toggle('hide');
}