<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mithai_cake";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Store received values and sanitize inputs
    $firstName = isset($_POST['firstName']) ? $conn->real_escape_string($_POST['firstName']) : '';
    $middleName = isset($_POST['middleName']) ? $conn->real_escape_string($_POST['middleName']) : '';
    $lastName = isset($_POST['lastName']) ? $conn->real_escape_string($_POST['lastName']) : '';
    $age = isset($_POST['age']) ? $conn->real_escape_string($_POST['age']) : '';
    $mobileNumber = isset($_POST['mobileNumber']) ? $conn->real_escape_string($_POST['mobileNumber']) : '';
    $email = isset($_POST['email']) ? $conn->real_escape_string($_POST['email']) : '';

    // Add your password hashing and further validation here

    // Insert data into the database
    $sql = "INSERT INTO registration (firstName, middleName, lastName, age, mobileNumber, email) 
            VALUES ('$firstName', '$middleName', '$lastName', '$age', '$mobileNumber', '$email')";
    
    if ($conn->query($sql) === TRUE) {
        header("Location: userlogin.html?success=Registration successful");
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
