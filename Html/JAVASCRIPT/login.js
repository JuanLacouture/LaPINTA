// Función para borrar el placeholder al hacer clic en el campo
function handleFocus(event) {
    event.target.dataset.placeholder = event.target.placeholder;
    event.target.placeholder = '';
}

// Función para restaurar el placeholder si el campo está vacío
function handleBlur(event) {
    if (event.target.value === '') {
        event.target.placeholder = event.target.dataset.placeholder;
    }
}

// Seleccionar los campos de usuario y contraseña
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Añadir eventos de focus y blur
usernameInput.addEventListener('focus', handleFocus);
usernameInput.addEventListener('blur', handleBlur);
passwordInput.addEventListener('focus', handleFocus);
passwordInput.addEventListener('blur', handleBlur);
