// Inputs //
const form = document.querySelector(".cadastral_users")
const userName = document.querySelector("#uname")
const userAge = document.querySelector("#uage")
const userCell = document.querySelector("#ucell")
const userState = document.querySelector("#ustate")
const userCidad = document.querySelector("#ucidad")
// Inputs Value //
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

btnForm.addEventListener("click", (e) => {
    e.preventDefault()
    addDiv();
    //
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
    linha += `<td>${userageValue}</td>`
    linha += `<td>${usercellValue}</td>`
    linha += `<td>${userstateValue}</td>`
    linha += `<td>${usercidadValue}</td>`
    linha += '</tr>'
    //
    linhas += linha;
    //
    bodyTable.innerHTML = linhas;
    headTable.innerHTML = description;
}); 

function addDiv() {
    div.style.display = "block"
}