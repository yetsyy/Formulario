function validateForm (){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var dayofbirth = document.getElementById("dayofbirth").value;
    var password = document.getElementById("password").value;

    if(username ==="") {
        alert("Please provide your username!");
        document.getElementById("username").focus();
        return false;
    }
    return true;
}

