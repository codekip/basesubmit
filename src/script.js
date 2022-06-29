const email = document.querySelector('.email');
const button = document.querySelector('.button');

function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

button.addEventListener('click', function () {
    console.log(email.value);
    if (email.value ==='') {
        console.log('Email is empty');
    }
  if (validateEmail(email.value)) {
    console.log('Email is valid');
  } else {
    console.log('Email is invalid');
  }
})