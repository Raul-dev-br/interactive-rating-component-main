const buttons = document.querySelectorAll('.button-feedback');
const buttonSubmit = document.getElementById('submit-btn')

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList = "button-feedback";
    });

    button.classList.add('btn-selected');
  })
})

function handleSubmit(){
  const arrayButtons = Array.from(buttons);
  const buttonSelected = arrayButtons.filter((btn) => btn.classList.contains('btn-selected'));
  if(buttonSelected == ''){
    alert('Por favor, selecione um número!');
    return
  }
  const number = buttonSelected[0].textContent;

  const divConteiner = document.querySelector('.container');
  divConteiner.innerHTML = `
    <div class="container thanks">

      <img src="images/illustration-thank-you.svg" class="img" alt="imagem de thank you">
      <span class="rate">You selected ${number} of 5</span>
      <h1 class="title">Thank you!</h1>

      <p class="text">We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch </p>
    </div>
  `
}

buttonSubmit.addEventListener("click", handleSubmit);