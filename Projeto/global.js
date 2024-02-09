// Inputs //
const form = document.querySelector(".cadastral_users")
const userName = document.querySelector("#uname")
const userAge = document.querySelector("#uage")
const userCell = document.querySelector("#ucell")
const userState = document.querySelector("#ustate")
const userCidad = document.querySelector("#ucidad")
const campos = document.querySelector(".inputs_required")
const span = document.querySelector(".span_required")
const usernameValue = userName.value
const userageValue = userAge.value
const usercellValue = userCell.value
const userstateValue = userState.value
const usercidadValue = userCidad.value
// Table //
const divTable = document.querySelector(".tabela_usuario")
const section = document.querySelector(".tabela")
const table = document.querySelector(".user")
const btnForm = document.querySelector(".btn_enviar_form")
let linhas = '';
const div  = document.querySelector(".tabela")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    //
    validauser();
}); 

function validauser () {
    const userN = userName.value;
    const userA = userAge.value;
    const userC = userCell.value;
    const userS = userState.value;
    const userCd = userCidad.value;

    if (userN, userA, userC, userS, userCd == ''){
        span.style.display = "block"
    } else {
        span.style.display = "none"
        createDiv();
        createUser();
    }
}
function createDiv () {
    div.style.display = "block"
}

function createUser () {
    const bodyTable = document.querySelector('tbody');
    const headTable = document.querySelector('thead');
    const usernameValue = userName.value
    const userageValue = userAge.value
    const usercellValue = userCell.value
    const userstateValue = userState.value
    const usercidadValue = userCidad.value
    //
    let description = '<tr>';
    description += `<th>Nome:</th>`
    description += `<th>Idade:</th>`
    description += `<th>Celular:</th>`
    description += `<th>Estado:</th>`
    description += `<th>Cidade:</th>`
    description += '</tr>'
    //
    let linha = '<tr>';
    linha += `<td>${usernameValue}</td>`
    linha += `<td>${userageValue} ANOS</td>`
    linha += `<td>${usercellValue}</td>`
    linha += `<td>${userstateValue}</td>`
    linha += `<td>${usercidadValue}</td>`
    linha += '</tr>'
    //
    linhas += linha;
    //
    bodyTable.innerHTML = linhas;
    headTable.innerHTML = description;
}