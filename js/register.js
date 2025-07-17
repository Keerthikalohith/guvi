$(document).ready(async function() {
    var token = localStorage.getItem("token");
    if (token && token !== "") {
        var ajaxRequest = {
            type: "POST",
            data: {
                token: token
            },
            url: "php/session.php"
        };
        let response = await $.ajax(ajaxRequest);
        let parsedResponse = JSON.parse(response);
        if (parsedResponse.status === "success") {
            alert("Already logged in!");
            window.location.href = "profile.html";
        } else {
            localStorage.removeItem("token");
        }
    }
});

var reisterFormElement = $("#registerForm");
reisterFormElement.on("submit", async function f (event){
    event.preventDefault();
    var nameElement = $("#name");
    var name = nameElement.val();
    var validName = false;
    if(name === ""){
        var validName = false;
        var invalidNameElement =$("#invalidName");
        invalidNameElement.removeClass("d-none");
    } else if(name !== "") {
        var validName = true;
        var invalidNameElement =$("#invalidName");
        invalidNameElement.addClass("d-none");
    }
    var emailElement = $("#email");
    var email = emailElement.val();
    var validEmail = false;
    if (email === "") {
        var validEmail = false;
        var invalidNameElement =$("#invalidEmail");
        invalidNameElement.removeClass("d-none");
    } else if (email !== "") {
        var validEmail = true;
        var invalidEmailElement =$("#invalidEmail");
        invalidEmailElement.addClass("d-none");
    }
    var mobileElement = $("#mobile");
    var mobileNo = mobileElement.val();
    const mobileRegex = /^\d{10}$/;
    var validNo = false;
    if (mobileNo === "" && !mobileRegex.test(mobileNo)) {
        var validNo = false;
        var invalidMobileElement =$("#invalidMob");
        invalidMobileElement.removeClass("d-none");
    } else if (mobileNo !== "") {
        var validNo = true;
        var invalidMobileElement =$("#invalidMob");
        invalidMobileElement.addClass("d-none")
    } 
    var genElement = $('input[name="gen1"]:checked');
    var gender = genElement.val();
    var validGender = false;
    if (!gender || gender === "") {
        validGender = false;
        var invalidGenderElement =$("#invalidGender");
        invalidGenderElement.removeClass("d-none");
    } else if (gender !== "") {
        validGender = true;
        var invalidGenderElement =$("#invalidGender");
        invalidGenderElement.addClass("d-none");
    }
    var passElement = $("#pass");
    var pass = passElement.val();
    var validPass = false;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (pass === "" || !passwordRegex.test(pass)) {
        var validPass = false;
        var invalidPassElement=$("#invalidPass");
        invalidPassElement.removeClass("d-none");
    } else if (pass !== "") {
        var validPass = true;
        var invalidPassElement=$("#invalidPass");
        invalidPassElement.addClass("d-none");
    }
    var confirmElement = $("#confirmPass");
    var confirm= confirmElement.val();
    var validConfirmPass = false;
    var confirmPasswordRegex =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (confirm === "" || !confirmPasswordRegex.test(confirm)) {
        validConfirmPass=false;
        var invalidConfirmPassElement =$("#invalidConfirmPass");
        invalidConfirmPassElement.removeClass("d-none");
        
    } else if (confirm !== "") {
        validConfirmPass = true;
        var invalidConfirmPassElement =$("#invalidConfirmPass");
        invalidConfirmPassElement.addClass("d-none");
    }
    
    var matchPassword = false;
    if (confirm === pass) {
        matchPassword = true;
        //classname we can use for mutilple validation
        var notMatchPassword =$(".notMatch");
        notMatchPassword.addClass("d-none");
    } else if (pass !== confirm) {
        matchPassword = false;
        var notMatchPassword =$(".notMatch");
        notMatchPassword.removeClass("d-none");
    }
    if (validName && validEmail && validNo && validPass && validConfirmPass && validGender && matchPassword) {
        let ajaxRequest={
            type:"POST",
            data:{
                name:name,
                email:email,
                mobile:mobileNo,
                gender:gender,
                password:pass,
            },
            url:"php/register.php"
        };
        let response = await $.ajax(ajaxRequest);
        let parsedResponse = JSON.parse(response);
        if (parsedResponse.message === "USER_ALREADY_REGISTER") {
            alert("your already register!")
            window.location.href="login.html";
        } else if (parsedResponse.message === "SUCCESSFULLY_REGISTER") {
            alert("Succssfully Register!");
            window.location.href="login.html";
        }
    }
});
