document.getElementById("login-submit").addEventListener("click", function(event){
    //Get user email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    
    //Get user password
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    //Check email and password
    if(userEmail == "sontan@baap.com" && userPassword == "secret"){
        window.location.href = "banking.html";
    }
});