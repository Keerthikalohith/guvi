// var registerButton = $("#reg1");
// registerButton.on("click",function a(load){
//     load.preventDefault();
//     var nameElement = $("#name");
//     var name = nameElement.val();
//     var emailElement = $("#email");
//     var email = emailElement.val();
//     var mobileElement = $("#mobile");
//     var mobile = mobileElement.val();
//     var genElement = $('input[name="gen1"]:checked');
//     var gender = genElement.val();
//     var passElement = $("#pass");
//     var pass = passElement.val();
//     var confirmElement = $("#confirmPass");
//     var confirm= confirmElement.val();
//     console.log(name,email,mobile,gender,pass,confirm);

// });

var reisterFormElement = $("#registerForm");
reisterFormElement.on("submit", async function f (event){
    event.preventDefault();
    var nameElement = $("#name");
    var name = nameElement.val();
    var validName = false;
    if(name===""){
        var validName = false;
        var invalidNameElement =$("#invalidName");
        invalidNameElement.removeClass("d-none");
    }else if(name!=""){
        var validName = true;
        var invalidNameElement =$("#invalidName");
        invalidNameElement.addClass("d-none");
    }
    var emailElement = $("#email");
    var email = emailElement.val();
    var validEmail = false;
    if(email=== ""){
        var validEmail = false;
        var invalidNameElement =$("#invalidEmail");
        invalidNameElement.removeClass("d-none");
    }else if(email!=""){
        var validEmail = true;
        var invalidEmailElement =$("#invalidEmail");
        invalidEmailElement.addClass("d-none");
    }
    var mobileElement = $("#mobile");
    var mobileNo = mobileElement.val();
    const mobileRegex = /^\d{10}$/;
    var validNo = false;
    if(mobileNo==="" && !mobileRegex.test(mobileNo)){
        var validNo = false;
        var invalidMobileElement =$("#invalidMob");
        invalidMobileElement.removeClass("d-none");
    }else if(mobileNo!=""){
        var validNo = true;
        var invalidMobileElement =$("#invalidMob");
        invalidMobileElement.addClass("d-none")
    } 
    var genElement = $('input[name="gen1"]:checked');
    var gender = genElement.val();
    var passElement = $("#pass");
    var pass = passElement.val();
    var validPass = false;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(pass==="" || !passwordRegex.test(pass)){
        var validPass = false;
        var invalidPassElement=$("#invalidPass");
        invalidPassElement.removeClass("d-none");
    }else if(pass!="" ){
        var validPass = true;
        var invalidPassElement=$("#invalidPass");
        invalidPassElement.addClass("d-none");
    }
    var confirmElement = $("#confirmPass");
    var confirm= confirmElement.val();
    var validConfirmPass = false;
    var confirmPasswordRegex =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(confirm==="" || !confirmPasswordRegex.test(confirm)){
        var validConfirmPass=false;
        var invalidConfirmPassElement =$("#invalidConfirmPass");
        invalidConfirmPassElement.removeClass("d-none");
        
    }else if(confirm!=""){
        var validConfirmPass = true;
        var invalidConfirmPassElement =$("#invalidConfirmPass");
        invalidConfirmPassElement.addClass("d-none");
    }
    if(confirm===pass){
        //classname we can use for mutilple validation
        var notMatchPassword =$(".notMatch");
        notMatchPassword.addClass("d-none");
    }else if(pass!=confirm){
        var notMatchPassword =$(".notMatch");
        notMatchPassword.removeClass("d-none");
    }
    if(validName && validEmail && validNo && validPass && validConfirmPass){
        let ajaxRequest={
        type:"POST",
        data:{
        name:name,
        email:email,
        mobile:mobileNo,
        gender:gender,
        password:pass,
        confirmPass:confirm
    },
        url:"http://localhost:8080/register.php"
};
    }
let response = await $.ajax(ajaxRequest);
if(response==="USER_ALREADY_REGISTER"){
    alert("your already register!")
window.location.href="http://localhost:5500/login.html";
}else if(response==="SUCCESSFULLY_REGISTER"){
  alert("Succssfully Register!");
  window.location.href="http://localhost:5500/login.html";
}
});
