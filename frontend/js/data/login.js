import { loguear, registro } from "../apis/apiLogin.js";


const formulario = document.querySelector('#login');
const register = document.querySelector('#register')
formulario.addEventListener('submit',credenciales);
register.addEventListener('submit',createCuenta);
function credenciales (e){
    e.preventDefault();
    const credenciales = {
        email: document.getElementById('logemail').value,
        password: document.getElementById('logpassword').value
    };
    loguear(credenciales)
}

function createCuenta(e){
    e.preventDefault();
    const data = {
        username: document.getElementById('registername').value,
        email: document.getElementById('registeremail').value,
        password: document.getElementById('newpassword').value,
        imgUser: document.getElementById('imgUser').value
    };
    registro(data)
}

