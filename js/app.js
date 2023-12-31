import { validatorInput } from "./validations.js";

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener('blur', (input)=>{
        validatorInput(input.target)
    })
    
});

 const allInputs = document.querySelectorAll('.input__field');
 const textarea = document.querySelector('.form__contact__textarea');
 const label = document.querySelectorAll('.input__label');

 console.log(allInputs.length);

 for( let index = 0; index < allInputs.length ; index++){  
 allInputs[index].addEventListener("focus", function(){
         console.log(label.length)
         allInputs[index].nextElementSibling.style.color = 'grey';
         allInputs[index].nextElementSibling.style.transition = 'all 0.3s ease';
         allInputs[index].nextElementSibling.style.top = '-20px';
         allInputs[index].nextElementSibling.style.color = 'var(--cor-de-blue)';
     });

textarea.addEventListener('focus', function(){
    textarea.nextElementSibling.style.color = 'grey';
    textarea.nextElementSibling.style.transition = 'all 0.3s ease';
    textarea.nextElementSibling.style.top = '-20px';
    textarea.nextElementSibling.style.color = 'var(--cor-de-blue)';
})

 allInputs[index].addEventListener("blur", function(){
        const label = allInputs[index].nextElementSibling;
        label.style.top = '-20px';
        label.style.width = '100%';
        label.style.fontSize = '12px';
        label.style.fontFamily = 'Raleway';
     });
     textarea.addEventListener('blur', function(){
        textarea.style.top = '-20px';
        textarea.style.width = '100%';
        textarea.style.fontSize = '12px';
        textarea.style.fontFamily = 'Raleway';
     })
 }
