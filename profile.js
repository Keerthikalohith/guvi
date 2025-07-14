// var profileButton = $("#reg");
// profileButton.on("click",function p(load){
//     load.preventDefault();
//     var userNameElement = $("#name");
//     var userName = userNameElement.val();
//     var emailIdElement= $("#email");
//     var emailId= emailIdElement.val();
//     var ageElement = $("#age");
//     var age = ageElement.val();
//     var dateOfBirthElement = $("#DoB");
//     var dateOfBirth = dateOfBirthElement.val();
//     var degreeElement = $("#degree");
//     var degree = degreeElement.val();
//     var deptElement = $("#dept");
//     var dept = deptElement.val();
//     var percentageElement = $("#Percentage");
//     var percentage = percentageElement.val();
//     var backlogElement = $("#backlog");
//     var backlog = backlogElement.val();
//     var fileElement = $("#resume");
//     var file = fileElement.val();
//     console.log(userName ,emailId ,age ,dateOfBirth ,degree,dept ,percentage ,backlog ,file);

// const { use } = require("react");

// });
var profileFormElement = $("#profileForm");
profileFormElement.on("submit",async function f(event){
event.preventDefault();
var userNameElement = $("#name");
var userName = userNameElement.val();
const firstNameRegex = /^[a-zA-Z'-]+$/;
if( userName==="" || !firstNameRegex){
    var invalidNameElement =$("#invalidName");
    invalidNameElement.removeClass("d-none");
}else if(userName != ""){
    var invalidNameElement =$("#invalidName");
    invalidNameElement.addClass("d-none");
}
var emailIdElement= $("#email");
var emailId= emailIdElement.val();
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

if(emailId==="" || !emailRegex){
    var invalidEmailElement =$("#invalidEmail");
    invalidEmailElement.removeClass("d-none");
}else if(emailIdElement!=""){
    var invalidEmailElement =$("#invalidEmail");
    invalidEmailElement.addClass("d-none");
}
var ageElement = $("#age");
var age = ageElement.val();
// var ageRegex = //;
if(age==="" ){
    var invalidAgeElement =$("#invalidage");
    invalidAgeElement.removeClass("d-none");
}else if(age!=""){
    var invalidAgeElement =$("#invalidage");
    invalidAgeElement.addClass("d-none");
}
var dateOfBirthElement = $("#DoB");
var dateOfBirth = dateOfBirthElement.val();
if(dateOfBirth==="" ){
    var invalidDOB =$("#invalidDOB");
    invalidDOB.removeClass("d-none");
}else if(dateOfBirth!=""){
    var invalidDOB =$("#invalidDOB");
    invalidDOB.addClass("d-none");
}
var degreeElement = $("#degree");
var degree = degreeElement.val();
if(degree==="" ){
    var invalidDegree =$("#invalidDegree");
    invalidDegree.removeClass("d-none");
}else if(degree!=""){
    var invalidDegree =$("#invalidDegree");
    invalidDegree.addClass("d-none");
}
var deptElement = $("#dept");
var dept = deptElement.val();
if(dept==="" ){
    var invalidDept =$("#invalidDept");
    invalidDept.removeClass("d-none");
}else if(dept!=""){
    var invalidDept =$("#invalidDept");
    invalidDept.addClass("d-none");
}
var percentageElement = $("#Percentage");
var percentage = percentageElement.val();
if(percentage=="" ||percentage<=0||percentage>=100 ){
    var invalidPercentage =$("#invalidPercentage");
    invalidPercentage.removeClass("d-none");
}else if(percentage!=""){
    var invalidPercentage =$("#invalidPercentage");
    invalidPercentage.addClass("d-none");
}
var backlogElement = $('input[name="gen"]:checked');
var backlog = backlogElement.val();
var post="POST";

let ajaxRequest={
    type:"POST",
    data:{
        userName:userName,
        emailId:emailId,
        age:age,
        dateOfBirth:dateOfBirth,
        degree:degree,
        dept:dept,
        percentage:percentage,
        backlog:backlog
    },
    url:"http://localhost:8080/profile.php"
};
let response = await $.ajax(ajaxRequest);
if(response === "PROFILE_UPDATE"){
    alert("Profile updated!");
}else if(response === "PROFILE_NOT_UPDATE"){
    alert("Profile not updated!");
}else if(response === "PROFILE_UPDATED_FAIL"){
    alert("profile not")
}
});