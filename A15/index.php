<?php
	 if(isset($_POST['name'])){
	    	setcookie("user", $_POST['name'], time()+3600);
			// Set the cookie for immediate access
			$_COOKIE['user'] = $_POST['name'];
	 }
	 echo "<h1 align='center'>Hello, ";
	 if(isset($_COOKIE['user'])){
		 echo $_COOKIE['user'] . "!</h1></br>";
	 }else{
		 echo "Guest!</h1></br>";
	 }
	 $con = new mysqli("localhost", "root", "", "comments2");
	 if($con->connect_errno){
		echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error . "</br>";
	 }
	 
	 //Add the new comment
	 if(isset($_POST['comment'])){
		 addComment($con);
	 }
	 
	 //Print previous comments
	 $pComments = mysqli_query($con, "SELECT * FROM comments");
	 echo "<table border='1' align='center'> <th> User </th><th> Comment </th>";
	 while($row = $pComments->fetch_assoc()){
	     echo "<tr><td>" . $row['USER'] . "</td><td>" . $row['COMMENT'] . "</td></tr>";
	 }
	 echo "</table>";

function addComment($con){
	 $user = $_COOKIE['user'];
	 $comment = $_POST['comment'];
	 $sql = "INSERT INTO COMMENTS VALUES (null, '$user', '$comment')";
	 $res = mysqli_query($con, $sql);
	if(!$res){
		echo "Could not insert into comments " . mysqli_error($con) . "</br>";
	}
}
	 
	 
?>

<!DOCTYPE HTML>
	 <head>
		 <title>Marek Lopez ICS 415 A15</title>
	 </head>
		 
	 <body style="text-align:center">
		 </br>
		 </br>
		 <form name = "username" action = "<?php echo $_SERVER['PHP_SELF'];?>" method = "post">
			 Enter your username to comment:  
			 <input type = "text" name = "name" autofocus = "autofocus">
			 </br>Enter your comment: </br>
			 <textarea name='comment' cols='50' rows='10' autofocus="autofocus"/>
			 </textarea>
			 </br>
			 <input type = "submit" value = "Submit">
		 </form>
	 </body>
</html>
<?php

	 $comcount = mysqli_query($con, "SELECT DISTINCT USER, COUNT(*) AS COUNT FROM comments GROUP BY USER");
	 echo "<table border = '1' align='center'><th colspan = '2' >Comment Count</th>";
	 
	 while($row = $comcount->fetch_assoc()){
		 echo "<tr><th>" . $row['USER'] . "</td><td>" . $row['COUNT'] ."</td></tr>";
	 }
	 
	 echo "</table>";
?>
