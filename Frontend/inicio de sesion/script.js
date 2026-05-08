const contenedor = document.querySelector('.contenedor');
const btn_register = document.querySelector('.register-btn');
const btn_login = document.querySelector('.login-btn');


//le agurego moviento a cada boton cuando se le da un click
// esto es para que se vea la animacion de movimiento en caso de ser LOG IN -- SIGN UP 
btn_register.addEventListener('click', () => {
    contenedor.classList.add('active');
})

btn_login.addEventListener('click', () => {
    contenedor.classList.remove('active');
}) 

document.querySelector(".form-log_in form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const correo = document.querySelector(".form-log_in input[type='email']").value;
    const password = document.querySelector(".form-log_in input[type='password']").value;

    const respuesta = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            correo,
            password
        })
    });

    const data = await respuesta.text();

    if (data === "Login correcto") {
        window.location.href = "../Home_pagina/home.html";
    } else {
        alert(data);
    }
});
