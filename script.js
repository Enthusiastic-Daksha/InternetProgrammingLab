/* =========================================
   LOGIN FUNCTION
========================================= */

function loginUser() {

    var username =
        document.getElementById("username").value.trim();

    var password =
        document.getElementById("password").value.trim();

    var message =
        document.getElementById("message");


    if (username == "" || password == "") {

        message.innerHTML =
            "Please enter username and password.";

        return false;
    }


    /*
       DEMO LOGIN

       Username: student
       Password: 1234
    */

    if (username == "student" && password == "1234") {

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        window.location.href =
            "student-details.html";

    }
    else {

        message.innerHTML =
            "Invalid username or password.";

    }

    return false;
}


/* =========================================
   STUDENT DETAILS FUNCTION
========================================= */

function saveStudentDetails() {

    var name =
        document.getElementById("studentName").value.trim();

    var registerNumber =
        document.getElementById("registerNumber").value.trim();

    var department =
        document.getElementById("department").value;

    var year =
        document.getElementById("year").value;

    var email =
        document.getElementById("email").value.trim();

    var college =
        document.getElementById("college").value.trim();

    var message =
        document.getElementById("detailsMessage");


    /* CHECK ALL FIELDS */

    if (
        name == "" ||
        registerNumber == "" ||
        department == "" ||
        year == "" ||
        email == "" ||
        college == ""
    ) {

        message.innerHTML =
            "Please fill all the details.";

        return false;
    }


    /* SAVE DETAILS */

    localStorage.setItem(
        "studentName",
        name
    );

    localStorage.setItem(
        "registerNumber",
        registerNumber
    );

    localStorage.setItem(
        "department",
        department
    );

    localStorage.setItem(
        "year",
        year
    );

    localStorage.setItem(
        "email",
        email
    );

    localStorage.setItem(
        "college",
        college
    );


    /* GO TO EXAM */

    window.location.href =
        "exam.html";

    return false;
}


/* =========================================
   DISPLAY STUDENT DETAILS IN EXAM
========================================= */

function displayStudentDetails() {

    var name =
        localStorage.getItem("studentName");

    var registerNumber =
        localStorage.getItem("registerNumber");

    var department =
        localStorage.getItem("department");

    var year =
        localStorage.getItem("year");

    var email =
        localStorage.getItem("email");

    var college =
        localStorage.getItem("college");


    if (document.getElementById("displayName")) {

        document.getElementById("displayName")
            .innerHTML = name || "";

        document.getElementById("displayRegister")
            .innerHTML = registerNumber || "";

        document.getElementById("displayDepartment")
            .innerHTML = department || "";

        document.getElementById("displayYear")
            .innerHTML = year || "";

        document.getElementById("displayEmail")
            .innerHTML = email || "";

        document.getElementById("displayCollege")
            .innerHTML = college || "";
    }
}


/* =========================================
   EXAM SUBMISSION
========================================= */

function submitExam() {

    var correctAnswers = {

        q1: "HTML",

        q2: "Cascading Style Sheets",

        q3: "JavaScript",

        q4: "Java",

        q5: "a",

        q6: "Sun Microsystems",

        q7: "Queue",

        q8: "SQL",

        q9: "HTTP",

        q10: "Linux"

    };


    var score = 0;

    var userAnswers = {};


    /* CHECK EACH QUESTION */

    for (
        var question in correctAnswers
    ) {

        var selected =
            document.querySelector(
                'input[name="' +
                question +
                '"]:checked'
            );


        if (selected) {

            userAnswers[question] =
                selected.value;


            if (
                selected.value ==
                correctAnswers[question]
            ) {

                score++;

            }

        }
        else {

            userAnswers[question] =
                "Not Answered";

        }
    }


    /* GET STUDENT NAME */

    var studentName =
        localStorage.getItem("studentName");

    var registerNumber =
        localStorage.getItem("registerNumber");


    /* CALCULATE PERCENTAGE */

    var percentage =
        (score / 10) * 100;


    /* RESULT */

    var resultHTML =

        "<div class='result-box'>" +

        "<h2>Examination Result</h2>" +

        "<p><b>Student Name:</b> " +
        studentName +
        "</p>" +

        "<p><b>Register Number:</b> " +
        registerNumber +
        "</p>" +

        "<p><b>Question 1:</b> " +
        userAnswers.q1 +
        "</p>" +

        "<p><b>Question 2:</b> " +
        userAnswers.q2 +
        "</p>" +

        "<p><b>Question 3:</b> " +
        userAnswers.q3 +
        "</p>" +

        "<p><b>Question 4:</b> " +
        userAnswers.q4 +
        "</p>" +

        "<p><b>Question 5:</b> " +
        userAnswers.q5 +
        "</p>" +

        "<p><b>Question 6:</b> " +
        userAnswers.q6 +
        "</p>" +

        "<p><b>Question 7:</b> " +
        userAnswers.q7 +
        "</p>" +

        "<p><b>Question 8:</b> " +
        userAnswers.q8 +
        "</p>" +

        "<p><b>Question 9:</b> " +
        userAnswers.q9 +
        "</p>" +

        "<p><b>Question 10:</b> " +
        userAnswers.q10 +
        "</p>" +

        "<p class='score'>" +
        "Final Score: " +
        score +
        " / 10" +
        "</p>" +

        "<p class='score'>" +
        "Percentage: " +
        percentage +
        "%" +
        "</p>" +

        "</div>";


    document.getElementById("result")
        .innerHTML = resultHTML;


    /* MOVE TO RESULT */

    document.getElementById("result")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   PAGE LOAD
========================================= */

window.onload = function() {

    displayStudentDetails();

};