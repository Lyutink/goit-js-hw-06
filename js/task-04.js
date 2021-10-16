let counterValue = 0;
const counterRef = document.querySelector('#value');

const btnIncrementRef = document.querySelector('#counter button[data-action="increment"]');
const btnDecrementRef = document.querySelector('#counter button[data-action="decrement"]');


const onIncremenrBtnClick = (() => {
    counterValue += 1;
    counterRef.textContent = counterValue;
});

const onDecrementBtnClick = (() => {
    counterValue -= 1;
    counterRef.textContent = counterValue;
});

btnIncrementRef.addEventListener('click', onIncremenrBtnClick);
btnDecrementRef.addEventListener('click', onDecrementBtnClick);