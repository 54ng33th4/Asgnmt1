let state = false;
// let password = document.getElementById('password');
let password = document.getElementById('password');
let passwordStrength = document.getElementById('passwordStrength');
let lowerUpperCase = document.querySelector('.low-upper-case i');
let number = document.querySelector('.one-number i');
let specialChar = document.querySelector('.one-special-char i');
let eightChar = document.querySelector('.eight-character i');

function myFunction(show){
    show.classList.toggle('fa-eye-slash');
}
function toggle(){
    if(state){
        password.setAttribute("type","password");
        state = false;
    }
    else{
        password.setAttribute("type","text");
        state = true;
    }
}

password.addEventListener('keyup',function(){
    let pass = password.value;
    checkStrength(pass);
})

function checkStrength(password){
    let strength = 0;
    // if password contains lower and upper case character
    if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength == 1;
        lowerUpperCase.classList.remove('fa-circle');
        lowerUpperCase.classList.add('fa-check');
    }
    else{
        lowerUpperCase.classList.add('fa-circle');
        lowerUpperCase.classList.remove('fa-check');
    }
    //if password has a number
    if(password.match(/([0-9])/)){
        strength == 1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    }else{
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');
    }
    //if password has one special character
    if(password.match(/([!,%,&,@,#,$,^,*,?,_,-])/)){
        strength == 1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    }else{
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
    //if password is more than 7
    if(password.length > 7){
        strength == 1;
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    }
    else{
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');
    }
     if(strength == 0){
         passwordStrength.style = 'width: 0%';
     }
     else if(strength == 2){
         passwordStrength.classList.remove('progress-bar-warning');
         passwordStrength.classList.remove('progress-bar-success');
         passwordStrength.classList.add('progress-bar-danger');
         passwordStrength.style = 'width: 10%';
     }
     else if(strength == 3){
         passwordStrength.classList.remove('progress-bar-success');
         passwordStrength.classList.remove('progress-bar-danger');
         passwordStrength.classList.add('progress-bar-warning');
         passwordStrength.style = 'width: 60%';
     }
     else if(strength == 4){
         passwordStrength.classList.remove('progress-bar-warning');
         passwordStrength.classList.remove('progress-bar-danger');
         passwordStrength.classList.add('progress-bar-success');
         passwordStrength.style = 'width: 100%';
     }
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const phoneno = document.getElementById('phoneno');
const email = document.getElementById('email');

const password2 = document.getElementById('password2');
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidMobile = phoneno => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(String(phoneno));
}
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const phonenoValue = phoneno.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    if(phonenoValue === '') {
        setError(phoneno, 'Mobile No. is required');
    } else if (!isValidMobile(phonenoValue)) {
        setError(phoneno, 'Formats: XXX XXX XXXX / XXX-XXX-XXXX / XXX.XXX.XXXX');
    } else {
        setSuccess(phoneno);
    }
if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } 
    else {
        setSuccess(password);
    }
if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
    return true;
};