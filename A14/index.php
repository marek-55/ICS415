<?php

$con = connectToDB();
//$tblTestSQL = "SHOW TABLES LIKE 'comments';"
$tblTest      = mysqli_query($con, "SHOW TABLES LIKE 'comments'");
if($tblTest->num_rows == 0){
	 echo "Comments does not exist</br>";
	 $res = mysqli_query($con, "CREATE TABLE Comments(ID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(ID), Comment VARCHAR(255))");
	 if(!$res){
		 echo "Could not create table" . mysqli_error($con) . "</br>";
	 }else{
		 echo "Table 'Comments' was created</br>";
	 }
}

if(isset($_POST['comment'])){
		if(!ctype_space($_POST['comment'])){		 
		 $res = mysqli_query($con, "INSERT INTO Comments VALUES(null, '$_POST[comment]')");
		 if(!$res){
			 echo "Could not add comment to database." . mysqli_error($con) . "</br>";
		 }
		
	}
}

echo "Previous comments:</br>";
$comments = mysqli_query($con, "SELECT * FROM Comments");
echo "<ol>";
while ($row = $comments->fetch_assoc()){
	 echo "<li>" . $row['Comment'] . "</li>";
}
echo "</ol>";
$comments->free();

function connectToDB(){
	$con = new mysqli("localhost", "root", "W4rr10r0fL1ght", "commentDB");
	//echo $con->connect_errno;//debugging purposes
	if ($con->connect_errno) {
		echo "Failed to connect to MySQL: (" . $con->connect_errno . ") " . $con->connect_error;
	}
	return $con;

}


?>

<!DOCTYPE html>
<head>
	<title>Marek Lopez A14 PHP Demo</title>
</head>
<body>
<form name='addComment' action="<?php echo $_SERVER['PHP_SELF'];?>" method='post'>
	 Enter a comment:</br>
	 <textarea name='comment' cols='50' rows='10' autofocus="autofocus"/>
	 </textarea>
	 </br>
	 <input type='submit' value='Submit comment' />
</form>
</body>
</html>

