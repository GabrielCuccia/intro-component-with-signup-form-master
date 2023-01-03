const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const gmail = document.querySelector("#email")
const password = document.querySelector("#password")
const button = document.querySelector("#button")
const firstNameError = document.querySelector("#first-name--error")
const lastNameError = document.querySelector("#last-name--error")
const gmailError  = document.querySelector("#email--error")
const passwordError = document.querySelector("#password--error")




button.addEventListener("click", (event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, "First name cannot be empty")
    validateEmpty(lastName.value, lastName, lastNameError, "Last name cannot be empty")
    validateEmpty(password.value, password, passwordError, "Password cannot be empty")
    validateGmail(gmail.value, gmail, gmailError, "Looks likes this is not an email")
    
})
function validateGmail(inputValue, inputDiv, error, inputName){
    let regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if(regEx.test(inputValue) == true){
        hiddeError(inputDiv, error)
    }
    else{
        showError(inputDiv, error, inputName)
    }
}
function validateEmpty(inputValue, inputDiv, error, inputName){
    if(inputValue.length == 0){
        showError(inputDiv, error, inputName)
    }
    else{
        hiddeError(inputDiv, error)
    }
}
function showError(inputDiv, error, inputName){
    inputDiv.style.border = "1px solid red"
    error.innerHTML = `
    <img class="error__icon" src="./images/icon-error.svg" alt=""><p>${inputName}</p>
    `

}
function hiddeError(inputDiv, error){
    inputDiv.style.border = "1px solid hsl(246, 25%, 77%)"
    error.innerHTML = `
    
    `

}