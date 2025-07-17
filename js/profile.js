$(document).ready(async function() {
    var token = localStorage.getItem("token");
    if (token && token !== "") {
        let ajaxRequest = {
            type: "POST",
            data: {
                token: token
            },
            url: "php/session.php"
        };
        let response = await $.ajax(ajaxRequest);
        let parsedResponse = JSON.parse(response);
        if (parsedResponse.status === "success") {
            var greetingElement = $("#greeting");
            greetingElement.text(parsedResponse.name);
            var name = parsedResponse.name;
            var email = parsedResponse.email;
            var mobile = parsedResponse.mobile;
            var gender = parsedResponse.gender;
            var age = parsedResponse.age;
            var dateOfBirth = parsedResponse.dateOfBirth;
            var degree = parsedResponse.degree;
            var dept = parsedResponse.dept;
            var percentage = parsedResponse.percentage;
            var backlog = parsedResponse.backlog;
            
            var userNameElement = $("#name");
            userNameElement.val(name ?? "");
            
            var emailIdElement = $("#email");
            emailIdElement.val(email ?? "");
            emailIdElement.prop("disabled", true);
            
            var mobileElement = $("#mobile");
            mobileElement.val(mobile ?? "");
            
            var genderElement = $("input[name='gen1'][value='" + gender + "']");
            if (genderElement) {
                genderElement.prop("checked", true);
            }
            
            var ageElement = $("#age");
            ageElement.val(age ?? "");

            var dateOfBirthElement = $("#DoB");
            dateOfBirthElement.val(dateOfBirth ?? "");

            var degreeElement = $("#degree");
            degreeElement.val(degree ?? "");

            var deptElement = $("#dept");
            deptElement.val(dept ?? "");

            var percentageElement = $("#Percentage");
            percentageElement.val(percentage ?? "");
            
            var backlogElement = $('input[name="gen"][value="' + backlog + '"]');
            if (backlogElement) {
                backlogElement.prop("checked", true);
            }
        } else {
            localStorage.removeItem("token");
            window.location.href = "login.html";
        }
    } else {
        window.location.href = "login.html";
    }
});

$(document).on("click", "#logout", async function() {
    let ajaxRequest = {
        type: "POST",
        data: {
            token: localStorage.getItem("token")
        },
        url: "php/logout.php"
    };
    let response = await $.ajax(ajaxRequest);
    let parsedResponse = JSON.parse(response);
    if (parsedResponse.status === "success") {
        localStorage.removeItem("token");
        alert("Logged out successfully!");
        window.location.href = "login.html";
    }
});

var profileFormElement = $("#profileForm");
profileFormElement.on("submit",async function f(event){
    event.preventDefault();
    var userNameElement = $("#name");
    var userName = userNameElement.val();
    const firstNameRegex = /^[a-zA-Z'-]+$/;
    var validName = false;
    if (userName === "" || !firstNameRegex) {
        validName = false;
        var invalidNameElement = $("#invalidName");
        invalidNameElement.removeClass("d-none");
    } else if (userName !== "") {
        validName = true;
        var invalidNameElement = $("#invalidName");
        invalidNameElement.addClass("d-none");
    }
    var emailIdElement = $("#email");
    var emailId = emailIdElement.val();
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    var validEmail = false;
    if (emailId === "" || !emailRegex) {
        validEmail = false;
        var invalidEmailElement = $("#invalidEmail");
        invalidEmailElement.removeClass("d-none");
    } else if (emailId !== "") {
        validEmail = true;
        var invalidEmailElement =$("#invalidEmail");
        invalidEmailElement.addClass("d-none");
    }
    var ageElement = $("#age");
    var age = ageElement.val();
    var validAge = false;
    if (age === "" || age <= 0 || age >= 100) {
        validAge = false;
        var invalidAgeElement = $("#invalidage");
        invalidAgeElement.removeClass("d-none");
    } else if (age !== "") {
        validAge = true;
        var invalidAgeElement = $("#invalidage");
        invalidAgeElement.addClass("d-none");
    }
    var dateOfBirthElement = $("#DoB");
    var dateOfBirth = dateOfBirthElement.val();
    var validDateOfBirth = false;
    if (dateOfBirth === "") {
        validDateOfBirth = false;
        var invalidDOB = $("#invalidDOB");
        invalidDOB.removeClass("d-none");
    } else if (dateOfBirth !== "") {
        validDateOfBirth = true;
        var invalidDOB = $("#invalidDOB");
        invalidDOB.addClass("d-none");
    }
    var degreeElement = $("#degree");
    var degree = degreeElement.val();
    var validDegree = false;
    if (degree === "") {
        validDegree = false;
        var invalidDegree = $("#invalidDegree");
        invalidDegree.removeClass("d-none");
    } else if (degree !== "") {
        validDegree = true;
        var invalidDegree = $("#invalidDegree");
        invalidDegree.addClass("d-none");
    }
    var deptElement = $("#dept");
    var dept = deptElement.val();
    var validDept = false;
    if (dept === "") {
        validDept = false;
        var invalidDept = $("#invalidDept");
        invalidDept.removeClass("d-none");
    } else if (dept !== "") {
        validDept = true;
        var invalidDept = $("#invalidDept");
        invalidDept.addClass("d-none");
    }
    var percentageElement = $("#Percentage");
    var percentage = percentageElement.val();
    var validPercentage = false;
    if (percentage === "" || Number(percentage) < 0 || Number(percentage) > 100) {
        validPercentage = false;
        var invalidPercentage = $("#invalidPercentage");
        invalidPercentage.removeClass("d-none");
    } else if (percentage !== "") {
        validPercentage = true;
        var invalidPercentage = $("#invalidPercentage");
        invalidPercentage.addClass("d-none");
    }
    var backlogElement = $('input[name="gen"]:checked');
    var backlog = backlogElement.val();
    var validBacklog = false;
    if (!backlog) {
        validBacklog = false;
        var invalidBacklog = $("#invalidBacklog");
        invalidBacklog.removeClass("d-none");
    } else {
        validBacklog = true;
        var invalidBacklog = $("#invalidBacklog");
        invalidBacklog.addClass("d-none");
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
    
    if (validName && validEmail && validAge && validDateOfBirth && validDegree && validDept && validPercentage && validBacklog && validGender) {
        let ajaxRequest = {
            type:"POST",
            data:{
                userName:userName,
                emailId:emailId,
                age:age,
                dateOfBirth:dateOfBirth,
                degree:degree,
                dept:dept,
                percentage:percentage,
                backlog:backlog,
                gender:gender,
                token: localStorage.getItem("token")
            },
            url:"php/profile.php"
        };
        let response = await $.ajax(ajaxRequest);
        let parsedResponse = JSON.parse(response);
        if(parsedResponse.status === "success"){
            alert("Profile updated!");
        }else if(parsedResponse.status === "error"){
            alert("Profile not updated!");
        }
    }
});