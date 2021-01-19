<?php

//database connection
$Server_Name='localhost';

$user='root';
$password='';
$database='CAculationDaTabase';
$connect=new mysqli($Server_Name,$user,$password,$database  );
if($connect->connect_error){
die("connection failed:" .$connect->connect_error);
}
else {
//  echo "connection sucessful";
}
$firstName =$_POST['f_NAME'];
$LastName =$_POST['L_NAME'];
$Account_Number =$_POST['Account_No'];
$Amount= $_POST['number_Amount'];
$Rate=$_POST['Number_rate'];
$Time=$_POST['Number_time_save'];
$stmt=$connect->prepare("insert into calculationinput(f_NAME,L_NAME,Account_No,number_Amount,Number_rate,Number_time_save) values(?,?,?,?,?,?)");
$stmt->bind_param("ssiiii",$firstName,$LastName,$Account_Number,$Amount,$Rate,$Time);
$stmt->execute();
echo"Thank you for contacting our service";
$stmt->close();
$connect->close();
?>
