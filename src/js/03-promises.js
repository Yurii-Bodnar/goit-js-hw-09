import Notiflix from 'notiflix';

const formRef = document.querySelector(".form")
const delayRef = document.querySelector("[name='delay']");
const stepRef = document.querySelector("[name='step']");
const amountRef = document.querySelector("[name='amount']");




formRef.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault()
    let delay = +delayRef.value;
    let deleyStep = +stepRef.value;
    let amount = amountRef.value
      for (let i = 0; i < amount; i++){
          
          console.log(createPromise(i+1, delay));
        delay += deleyStep
      }
    
  
}

function createPromise(position, delay) {
 
  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
    resolve( `✅ Fullfiled promise ${position} in ${delay} ms`)
  } else {
    reject(`❌Rejected promise ${position} in ${delay} ms`)
  }
  },delay)

  }).then(result => Notiflix.Notify.success(result)).catch(error => Notiflix.Notify.failure(error));

}
