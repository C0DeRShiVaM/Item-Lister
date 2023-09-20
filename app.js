//                     Local Storage

// localStorage.setItem('name', 'shivam');
// localStorage.getItem('name');
// localStorage.removeItem('name');


//Putting the values in form and making it functional
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();

    // storing the user details in local storage


    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(()=> msg.remove(), 3000);
    }else{
        const name = nameInput.value;
        const email = emailInput.value;
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        console.log('User details stored in local storage');
    }
}
