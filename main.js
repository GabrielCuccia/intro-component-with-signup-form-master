const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const gmail = document.querySelector("#gmail")
const password = document.querySelector("#password")
const button = document.querySelector("#button")
const firstNameError = document.querySelector("#firt-name--error")
const lastNameError = document.querySelector("#last-name--error")
const gmailError  = document.querySelector("#gmail--error")
const passwordError = document.querySelector("#password--error")



button.addEventListener("click", (event)=>{
    event.preventDefault();
    if(firstName == " "){
        firstNameError.style.display = "flex"
    }
})
