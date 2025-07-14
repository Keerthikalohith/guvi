
var loginFormElement = $("#loginForm");
loginFormElement.on("submit",async function f (load){
   load.preventDefault();
   //email field
   var emailElement =$("#email");
   var email = emailElement.val();
   var validEmail = false;
   const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
   if(email === "" ||email.length<=5 || email.length>=50|| !emailRegex.test(email)){
      validEmail = false;
      var invalidEmailElement = $("#invalidEmail");
      invalidEmailElement.removeClass("d-none")
   }else if(email != ""){
      validEmail = true;
      var invalidEmailElement = $("#invalidEmail");
      invalidEmailElement.addClass("d-none"); 
   }
   //password field  
   var passwordElement =$("#password");
   var password = passwordElement.val();
   var validPassword = false;
   var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
   if(password === "" || password<=5 || password>=100 || !regularExpression.test(password)){
      validPassword = false;
      var invalidPasswordElement = $("#invalidPassword");
      invalidPasswordElement.removeClass("d-none");
   }else if(password != ""){
      validPassword = true;
      var invalidEmailElement = $("#invalidPassword");
      invalidEmailElement.addClass("d-none");
   }
   console.log(email,password);
   if(validEmail && validPassword){
     let ajaxRequest={
      type:"POST",
      data:{
         email:email,
         password:password
      },
      url:"http://localhost:8080/login.php"
   }; 
   }
   
   let respond= await $.ajax(ajaxRequest);
   if(respond==="SUCCESSFULLY_LOGIN"){
       window.location.href ="http://localhost:5500/profile.html";
   }else if(respond==="WRONG_PASSWORD"){
      alert("Password Incorrect! enter valid password");
   }else if(respond==="UR_NOT_REGISTER"){
       window.location.href ="http://localhost:5500/register.html";
   }
   
});



