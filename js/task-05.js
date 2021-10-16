const inputRef = document.querySelector('#name-input');
const spanOutputRef = document.querySelector('#name-output');

const textInSpanEmpty = spanOutputRef.textContent;

inputRef.addEventListener('input', onTextInInput);

function onTextInInput(event) {
    if (event.currentTarget.value === "") {
        return spanOutputRef.textContent = textInSpanEmpty;
    }
    console.log(spanOutputRef.textContent = event.currentTarget.value.trim());
}