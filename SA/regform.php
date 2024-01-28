<?php
include('dbconnect.php');

if (isset($_POST['submit'])) {
    $username = $_POST["username"];
    $dob = $_POST["date"];
    $emailid = $_POST["email"];
    $mob = $_POST["mob"];
    $gender = $_POST["gender"];
    $pass = $_POST["pass"];
    $Education = $_POST["Education"];
    
    $query = "INSERT INTO `users` 
    (`username`, `dob`, `emailid`, `mob`,
     `gender`, `pass`, `Education`) VALUES
    (?, ?, ?, ?, ?, ?, ?)";
$stmt=mysqli_prepare($conn,$query);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, 'sssisss',
        $username, $dob, $emailid, $mob,
         $gender, $pass, $Education);
        $result = mysqli_stmt_execute($stmt);

        if ($result) {
            header("Location: output.php");
        } else {
            echo '<script>
                window.location.href = "index.php";
                alert("Submission failed. Invalid name, email, or description.")
            </script>';
        }

         mysqli_stmt_close($stmt);
    }
}

// Close the database connection
mysqli_close($conn);
?>