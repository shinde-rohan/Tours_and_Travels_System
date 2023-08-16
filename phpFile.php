<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    $con = mysqli_connect($server,$username,$password);
if(!$con){
    die("connection to this database failed due to".mysqli_connect_error());
}

$fullname = $_POST['fullname'];
$placeName = $_POST['placeName'];
$PackagePrice = $_POST['PackagePrice'];
$date = $_POST['date'];
$mode = $_POST['mode'];
$sql = "INSERT INTO `tat`. `userdetails` (`sr.no`, `FullName`, `placeName`, `PackagePrice`, `date`, `mode`, `entryDate`) VALUES ('$fullname', '$placeName', '$PackagePrice', '$date', '$mode', current_timestamp());";
echo $sql;

?>
