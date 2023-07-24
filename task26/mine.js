const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
let isAlertVisible = false;

const toggleAlert = () => {
  if (isAlertVisible) {
    hideAlert();
  } else {
    showAlert('Nice, you triggered this alert message!', 'success');
  }
};

const showAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder.appendChild(wrapper);
  isAlertVisible = true;
};


const hideAlert = () => {
  const alertElement = alertPlaceholder.querySelector('.alert');
  if (alertElement) {
    alertElement.remove();
  }
  isAlertVisible = false;
};

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', toggleAlert);
}

//Введення дати
const myDate = document.querySelector('.myDate');
const day = moment('1985-10-18').format('MM.DD.YYYY')
myDate.textContent = `Мій день народження ${day}`;


//Формат дати
const inputButton = document.getElementById('inputButton');

inputButton.addEventListener('click', () => {  
  const userInput = prompt("Введіть дату народження в форматі Рік-місяць-число:");
  
   if (userInput) {
    alert(moment(userInput).format("MMM Do YY"));      
  }
});



// Валідація дати

const validDate = document.querySelector('.form-control');
const send = document.getElementById('button-addon1');
const mess = document.querySelector('.message');

send.addEventListener('click', function () {
  const dateRegex = /^\d{2}\.|\/\d{2}\.|\/\d{4}$/;
  const inp = validDate.value;

  if (inp === "") {
    mess.textContent = "Input is empty";
  } else if (!dateRegex.test(inp)) {
    mess.textContent = "Invalid date format. Please use dd.mm.yyyy format or dd/mm/yyyy.";
  } else {
    mess.textContent = "Date is valid!";
  }
});
