const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);
    console.log(emailInput.value);
}

const btn = document.querySelector('.btn');
 
btn.addEventListener('click', onClick);
btn.addEventListener('mouseover', onMouseOver);
btn.addEventListener('mouseout', onMouseOut);

function onClick(e) {
    console.log('Button clicked!');
}

function onMouseOver(e) {
    console.log('Mouse over the button!');
   
}

function onMouseOut(e) {
    console.log('Mouse out of the button!');
 
}