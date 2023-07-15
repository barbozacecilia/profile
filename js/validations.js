export function validatorInput(input){
    const inputType = input.dataset.type
    console.log(input.parentElement)
    if(input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = " "
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = showErrorMessage(inputType, input)
    }
}

const typesOfErrors =[
    "valueMissing",
    "patternMismatch",
    "customError",
    "typeMismatch"
]
const msjError = {
    name: {
        valueMissing: "Debe escribir su nombre",
        typeMismatch: "Debe tener más de dos caracteres",
        patternMismatch: "Solo se admiten letras"
    },
    email:{
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido",
    },
    subject: {
        valueMissing: "Escriba el asunto de su mensaje",
        typeMismatch: " no es valido",
    },
    message:{
        valueMissing: "El espacio para el mensaje no puede estar sin completar",
        typeMismatch: " no es valido",
        customError: "Solo se puede escribir hasta 300 letras"
    },

}

function showErrorMessage(inputType, input){
    let message = " ";
    typesOfErrors.forEach(error =>{
        if(input.validity[error]){
            console.log(inputType, error);
            console.log(input.validity[error]);
            console.log(msjError[inputType][error]);
            message = msjError[inputType][error];
        }
    })


    return message
}