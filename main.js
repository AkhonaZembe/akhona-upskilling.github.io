//Add elements to the DOM
const userForm = document.getElementById('userform');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');            
const message = document.querySelector('.msg');
const userList = document.getElementById('users');

//On submit event, add user to the list
userForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    //Check if the inputs are empty
    //alert('Please enter all fields');
    if (nameInput.value === '' || emailInput.value === '') {
        message.classList.add('error');
        message.innerHTML = 'Please enter all fields';
        setTimeout(() => message.remove(), 3000);
    } else {
        //Create a new user object
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
         
        //Add the user to the list
          userList.appendChild(li);
        //Clear the inputs
        nameInput.value = '';
        emailInput.value = '';
    }
}