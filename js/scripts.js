$(document).ready (function(){
    $(".btn-login").submit(function(e) {
        e.preventDefault();
        var email=$("#loginFormEmail").val();
        var password=$("#loginFormPassword").val();

        if (email === "") {
            alert("please input email")
        }
        else if(password === "" && password.length < 8){
            alert("password must be atleast 8 characters")
        }
        else{
            alert("login successful")
        }
    });
});