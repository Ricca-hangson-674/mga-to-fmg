const source = document.querySelector('#source');
const convert = document.querySelector('#convert');
const inputFMG = document.querySelector('#js-fmg');
const btnSansFoutre = document.querySelector('#js-btnSansFoutre');

convert.disabled = true;

source.addEventListener('keyup', () => {
    if (source.value !== '' && Number(source.value) >= 0) {
        convert.disabled = false;
        source.classList.remove('is-invalid');
    } else {
        convert.disabled = true;
        source.classList.add('is-invalid');
    }
})


btnSansFoutre.addEventListener('click', () => {
    inputFMG.disabled = false;

    inputFMG.value = Number(source.value) * 5;
    
    inputFMG.readOnly = true;
})
