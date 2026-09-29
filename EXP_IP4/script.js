window.onload = function()
{
    var heading = document.getElementById("heading").innerHTML;
    heading = heading.toUpperCase();
    document.getElementById("heading").innerHTML = heading;
};
document.getElementById("registrationForm").addEventListener("submit", function(e){
e.preventDefault();
let isValid = true;
document.getElementById("fullNameError").innerHTML="";
document.getElementById("emailError").innerHTML="";
document.getElementById("phoneError").innerHTML="";
document.getElementById("passwordError").innerHTML="";
document.getElementById("qualificationError").innerHTML="";
document.getElementById("jobTitleError").innerHTML="";
document.getElementById("experienceError").innerHTML="";
document.getElementById("resumeLinkError").innerHTML="";
document.getElementById("resumeFileError").innerHTML="";
document.getElementById("successMsg").innerHTML="";
let fullName = document.getElementById("fullName").value.trim();
fullName = fullName.toUpperCase();
document.getElementById("fullName").value = fullName;
if(fullName=="")
{
    document.getElementById("fullNameError").innerHTML="Enter Full Name";
    isValid=false;
}
else if(fullName.length<3)
{
    document.getElementById("fullNameError").innerHTML="Minimum 3 Characters Required";
    isValid=false;
}
let email = document.getElementById("email").value.trim().toLowerCase();
if(email=="")
{
    document.getElementById("emailError").innerHTML="Enter Email";
    isValid=false;
}
else if(email.indexOf("@")==-1 || email.indexOf(".")==-1)
{
    document.getElementById("emailError").innerHTML="Invalid Email Address";
    isValid=false;
}
let phone = document.getElementById("phone").value.trim();
if(phone=="")
{
    document.getElementById("phoneError").innerHTML="Enter Phone Number";
    isValid=false;
}
else if(phone.length!=10 || isNaN(phone))
{
    document.getElementById("phoneError").innerHTML="Enter Valid 10 Digit Number";
    isValid=false;
}
let password = document.getElementById("password").value;

if(password=="")
{
    document.getElementById("passwordError").innerHTML="Enter Password";
    isValid=false;
}
else if(password.length<6)
{
    document.getElementById("passwordError").innerHTML="Minimum 6 Characters Required";
    isValid=false;
}
let qualification = document.getElementById("qualification").value;
if(qualification=="")
{
    document.getElementById("qualificationError").innerHTML="Select Qualification";
    isValid=false;
}
let job = document.getElementById("jobTitle").value.trim();
if(job=="")
{
    document.getElementById("jobTitleError").innerHTML="Enter Job Title";
    isValid=false;
}
let experience = document.getElementById("experience").value;
if(experience=="")
{
    document.getElementById("experienceError").innerHTML="Enter Experience";
    isValid=false;
}
else if(experience<0)
{
    document.getElementById("experienceError").innerHTML="Invalid Experience";
    isValid=false;
}
let resumeLink = document.getElementById("resumeLink").value.trim();

if(resumeLink=="")
{
    document.getElementById("resumeLinkError").innerHTML="Enter Resume Link";
    isValid=false;
}
else if(resumeLink.indexOf("http://")!=0 && resumeLink.indexOf("https://")!=0)
{
    document.getElementById("resumeLinkError").innerHTML="Enter Valid Resume Link";
    isValid=false;
}
let resume = document.getElementById("resumeFile").value;
if(resume=="")
{
    document.getElementById("resumeFileError").innerHTML="Upload Resume";
    isValid=false;
}
else
{
    let extension = resume.substring(resume.lastIndexOf(".")).toLowerCase();

    if(extension!=".pdf" && extension!=".doc" && extension!=".docx")
    {
        document.getElementById("resumeFileError").innerHTML="Only PDF, DOC or DOCX Allowed";
        isValid=false;
    }
}
if(isValid)
{
    let result = confirm("Do you want to submit the registration?");

    if(result)
    {
        alert("Registration Completed Successfully!");

        document.getElementById("successMsg").innerHTML="Registration Successful.";

        document.getElementById("registrationForm").reset();
    }
}

});