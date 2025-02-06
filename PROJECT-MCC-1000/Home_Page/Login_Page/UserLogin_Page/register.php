<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<pre>";
    print_r($_POST);  // Debug: Check if form data is received
    print_r($_FILES); // Debug: Check if file data is received
    echo "</pre>";

    // Store received values
    $firstName = isset($_POST['firstName']) ? $conn->real_escape_string($_POST['firstName']) : '';
    $middleName = isset($_POST['middleName']) ? $conn->real_escape_string($_POST['middleName']) : '';
    $lastName = isset($_POST['lastName']) ? $conn->real_escape_string($_POST['lastName']) : '';
    $dateOfBirth = isset($_POST['age']) ? $conn->real_escape_string($_POST['age']) : '';
    $mobileNumber = isset($_POST['mobileNumber']) ? $conn->real_escape_string($_POST['mobileNumber']) : '';
    $email = isset($_POST['email']) ? $conn->real_escape_string($_POST['email']) : '';

    if (empty($firstName) || empty($lastName) || empty($dateOfBirth) || empty($mobileNumber) || empty($email)) {
        die("⚠️ Error: Required fields are missing.");
    }

    // File upload handling
    $profilePicture = "";
    if (isset($_FILES["profilePictureInput"]) && $_FILES["profilePictureInput"]["error"] == 0) {
        $targetDir = "uploads/";
        if (!is_dir($targetDir)) {
            mkdir($targetDir, 0777, true);
        }
        $fileName = time() . "_" . basename($_FILES["profilePictureInput"]["name"]);
        $profilePicture = $targetDir . $fileName;
        move_uploaded_file($_FILES["profilePictureInput"]["tmp_name"], $profilePicture);
    }

    // SQL Query with Debugging
    $sql = "INSERT INTO registration (first_name, middle_name, last_name, date_of_birth, mobile_number, email, profile_picture) 
            VALUES ('$firstName', '$middleName', '$lastName', '$dateOfBirth', '$mobileNumber', '$email', '$profilePicture')";

    if ($conn->query($sql) === TRUE) {
        echo "✅ Registration successful!";
    } else {
        echo "❌ SQL Error: " . $conn->error; // Display SQL error
    }
}
$conn->close();
?>
