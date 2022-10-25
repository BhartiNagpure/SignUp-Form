
function validation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var conpass = document.getElementById('conpass').value; 
    var mobile = document.getElementById('mobile').value;

    if(name == ""){
        document.getElementById('username').innerHTML=" ** Please enter a Fullname"
        return false;
    }
    if ((name.length <=2 )|| (name.length >= 20)){
        document.getElementById('username').innerHTML=" ** Name length must be between 2 and 20"
        return false;
    }
    if(!isNaN(name)){
        document.getElementById('username').innerHTML=" ** Only characters are allowed"
        return false;
    }
    if(email == ""){
        document.getElementById('useremail').innerHTML=" ** Please enter valid email"
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('useremail').innerHTML=" ** Invalid @ position enter valid email"
        return false;
    }
    if((email.charAt(email.length-4) != '.') && (email.charAt(email.length- 3) != '.')){
        document.getElementById('useremail').innerHTML=" ** Invalid dot (.) position enter valid email"
        return false;
    }
    if(password == ""){
        document.getElementById('userpass').innerHTML=" ** Please enter a password"
        return false;
    }
    if(password <= 5){
        document.getElementById('userpass').innerHTML=" ** Password must be more than 5 letter"
        return false;
    }
    if(conpass == ""){
        document.getElementById('userconpass').innerHTML=" ** Please enter a confirmpassword "
        return false;
    }
    if(password != conpass){
        document.getElementById('userconpass').innerHTML="Password are not match to first password "
        return false;
    }
    if(mobile == ""){
        document.getElementById('usermobile').innerHTML=" ** Please enter mobile number"
        return false;
    }
    if(mobile.length != 10){
        document.getElementById('usermobile').innerHTML=" ** Please enter a 10 digit mobile number"
        return false;
    }
}
