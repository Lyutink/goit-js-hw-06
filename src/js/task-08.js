const formLoginRef = document.querySelector('.login-form');

formLoginRef.addEventListener('submit', onSubmit);

function onSubmit (event) {
    event.preventDefault();

    if (event.currentTarget.elements.email.value && event.currentTarget.elements.password.value === ""){
        alert('Предупреждение!!! Все поля должны быть заполнены!');
    } else {
        saveData(event);
    }
};

function saveData(event) {
    const name = event.currentTarget.elements.email.name;
    const password = event.currentTarget.elements.password.name;

    const dataInForm = {
        [name]:  event.currentTarget.elements.email.value,
        [password]: event.currentTarget.elements.password.value,
    }

    console.log(dataInForm);
    event.currentTarget.reset();
}


