let counterValue = 0;
const counterRef = document.querySelector('#value');

const btnIncrementRef = document.querySelector('#counter button[data-action="increment"]')
btnIncrementRef.addEventListener('click', () => {
    counterValue += 1;
    console.log(counterRef.textContent = counterValue);
})

const btnDecrementRef = document.querySelector('#counter button[data-action="decrement"]')
btnDecrementRef.addEventListener('click', () => {
    counterValue -= 1;
    console.log(counterRef.textContent = counterValue);
})



