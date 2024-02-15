const formEl = document.getElementById('form');
const firstNameEl = document.getElementById('firstName');
const LastNameEl = document.getElementById('lastName');
const buttonEl = document.getElementById('sendButton');
const outputEl = document.getElementById('output');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    [firstNameEl.name]: firstNameEl.value,
    [LastNameEl.name]: LastNameEl.value,
  };

  const areInputsValid = useValidator(data, dataModelValidator);
  console.log(areInputsValid);
});

const dataModelValidator = {
  [firstNameEl.name]: (input) => isString(input),
  [LastNameEl.name]: (input) => atLeastFiveChar(input),
};

const isString = (input) => (typeof input === 'string' && input.length > 0) || input instanceof String;

const atLeastFiveChar = (input) => input.length > 4;

const useValidator = (dataObj, validatorObj) => {
  const inputsValidity = {};
  for (const property in dataObj) {
    inputsValidity[property] = validatorObj[property](dataObj[property]);
  }
  return inputsValidity;
};
