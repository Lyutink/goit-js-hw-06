const validationInputRef = document.querySelector('#validation-input');

const lengthInputCorrect = Number(validationInputRef.dataset.length);

validationInputRef.addEventListener('blur', foo);

function foo() {
    validationInputRef.classList.add('invalid');
    if (validationInputRef.value.length === lengthInputCorrect) {
        validationInputRef.classList.replace('invalid', 'valid');
    }
}