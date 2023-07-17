import { validatorInput } from "./validations.js";

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener('blur', (input)=>{
        validatorInput(input.target)
    })
    
});


// export function inputLabel(input) {
//     document.querySelector(".input__field");

//     inputLabel.addEventListener("focus", ()=>{
//         console.log("click")
//         document.querySelector(".input__label").style.top = '-20px';
//         document.querySelector(".input__label").style.top = '-20px';    
//     });
// }



const input = document.querySelector(".input__field");
const label = document.querySelector(".input__label");
    input.addEventListener("focus", function(){
    label.style.display = 'inline';
    console.log("click")
});

input.addEventListener("blur", function(){
    label.style.top= '-20px';
    label.style.color = '#007bff';
    label.style.width= "100%";
    label.style.fontSize= "12px";
    label.style.fontFamily= "Raleway";
});
