const input = document.getElementById('input');
const button = document.getElementById('button');

const number = document.getElementById('number');
const result = document.getElementById('result');

input.addEventListener('input', (e) => {
  input.style.color = e.target.value < 0 ? 'red' : 'black';
});

/* ---- */

button.addEventListener('click', () => {
  const parsedValue = Number(input.value);

  if (Number.isNaN(parsedValue)) {
    result.style.color = 'red';
    result.textContent = 'ERROR!';
  } else {
    number.textContent = parsedValue;
    result.textContent = parsedValue + 10;
  }
});

//console.dir(input);
//console.log(event);

input.value
number.innerText

input.addEventListener('keypress', (event) => {
  const lastValue = input.value.charAt(input.value.length - 1);

  if(Number.isFinite(lastValue) === false) {
    const newValue = input.value.substring(0, input.value.length -1);
    input.value = newValue;
  }
});