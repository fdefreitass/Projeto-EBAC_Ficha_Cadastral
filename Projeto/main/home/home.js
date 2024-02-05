const btnEnviar = document.querySelector(".btn-home");
const btnHome = document.querySelector(".btn_header");
const secHome = document.querySelector(".home");
const cadastralUser = document.querySelector(".tela_de_cadastro");

btnEnviar.addEventListener("submit", (e)=> {
    e.preventDefault();

    SubmitUser();
});
btnHome.addEventListener("submit", (e)=> {
    e.preventDefault();

    RestauredUser();
});

function SubmitUser() {
    secHome.style.display = "none"
    cadastralUser.style.display = "block"
    btnHome.style.display = "block"
}

function RestauredUser() {
    secHome.style.display = "block"
    cadastralUser.style.display = "none"
}