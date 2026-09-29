<?php

$messages = array();

$name = $_POST['fullname'];
$email = $_POST['emailid'];
$password = $_POST['passcode'];
$phone = $_POST['mobile'];
$card = $_POST['cardno'];


/* Name validation */

if (!preg_match("/^[A-Za-z ]{3,40}$/", $name)) {
    $messages[] = "Name should contain only alphabets and spaces.";
}


/* Email validation */

if (!preg_match("/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/", $email)) {
    $messages[] = "Please enter a valid email address.";
}


/* Password validation */

if (!preg_match("/^(?=.*[A-Za-z])(?=.*[0-9]).{6,20}$/", $password)) {
    $messages[] = "Password must contain letters and numbers and be 6 to 20 characters long.";
}


/* Phone validation */

if (!preg_match("/^[6-9][0-9]{9}$/", $phone)) {
    $messages[] = "Phone number must contain 10 digits.";
}


/* Credit card validation */

if (!preg_match("/^[0-9]{16}$/", $card)) {
    $messages[] = "Credit card number must contain exactly 16 digits.";
}

?>

<!DOCTYPE html>
<html>

<head>

    <title>Validation Result</title>

    <style>

        body {
            font-family: Arial, sans-serif;
            background: #e8f0fe;
            margin: 0;
            padding: 40px;
        }

        .result-box {
            width: 700px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px #aaa;
        }

        h2 {
            text-align: center;
            color: #333;
        }

        .success {
            color: green;
            text-align: center;
        }

        .failed {
            color: red;
            text-align: center;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 25px;
        }

        th {
            background: #3367d6;
            color: white;
            padding: 12px;
        }

        td {
            border: 1px solid #ccc;
            padding: 12px;
        }

        td:first-child {
            font-weight: bold;
            width: 35%;
        }

        .back {
            display: block;
            width: 120px;
            margin: 25px auto 0;
            padding: 10px;
            text-align: center;
            background: #3367d6;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }

        .back:hover {
            background: #244fa8;
        }

        ul {
            color: red;
            line-height: 1.8;
        }

    </style>

</head>

<body>

<div class="result-box">

<?php

if (count($messages) == 0) {

    echo "<h2 class='success'>Registration Successful!</h2>";

    echo "<p style='text-align:center;'>Welcome, "
         . htmlspecialchars($name)
         . "!</p>";

    echo "<table>";

    echo "<tr>";
    echo "<th>Field</th>";
    echo "<th>Entered Value</th>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>Full Name</td>";
    echo "<td>" . htmlspecialchars($name) . "</td>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>Email Address</td>";
    echo "<td>" . htmlspecialchars($email) . "</td>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>Password</td>";
    echo "<td>********</td>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>Phone Number</td>";
    echo "<td>" . htmlspecialchars($phone) . "</td>";
    echo "</tr>";

    echo "<tr>";
    echo "<td>Credit Card Number</td>";
    echo "<td>**** **** **** " . substr($card, -4) . "</td>";
    echo "</tr>";

    echo "</table>";

    echo "<a class='back' href='index.html'>Go Back</a>";

} else {

    echo "<h2 class='failed'>Registration Failed</h2>";

    echo "<p>Please correct the following errors:</p>";

    echo "<ul>";

    foreach ($messages as $message) {
        echo "<li>" . htmlspecialchars($message) . "</li>";
    }

    echo "</ul>";

    echo "<a class='back' href='index.html'>Go Back</a>";
}

?>

</div>

</body>
</html>