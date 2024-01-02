const answers = document.querySelectorAll('.answer');
const imgElements = document.querySelectorAll('.question-container img');

imgElements.forEach((el, index) => {
    el.addEventListener('click', () => toggleIcon(index));
})

function toggleIcon(i) {
    //change icons
    if(imgElements[i].src == 'http://127.0.0.1:5500/assets/images/icon-minus.svg'){
        imgElements[i].src = 'http://127.0.0.1:5500/assets/images/icon-plus.svg';
    }else {
        imgElements[i].src = 'http://127.0.0.1:5500/assets/images/icon-minus.svg';
    }

    //hide or show answers
    answers[i].classList.toggle('hide');

}

