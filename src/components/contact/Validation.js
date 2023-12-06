export default function Validation(values){
    const errors = {}

    const email_pattern = /^[^s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if(values.name ==="") {
        errors.name = "Name is Required";
    }
    else if( values.name.length <3 || values.name.length >=25){
        errors.name = "Name should be between 3 and 25 characters"
    }

    if(values.email ==="") {
        errors.email = "Email is Required";
    }
    else if(!email_pattern.test(values.email)) {
        errors.email = "Email is incorrect";
    } 

    if(values.password ==="") {
        errors.password = "Password is Required";
    }
    else if(!password_pattern.test(values.password)) {
        errors.password = "Password is incorrect";
    }
    if(values.cPassword !== values.password){
        errors.cPassword = "Passwords dont match";
    }
    console.log(errors);
    return errors;
}