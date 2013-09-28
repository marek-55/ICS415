<?php
if(isset($_POST['comment'])){
		if($_POST['comment'] != null){
		$writeHandle = fopen("sample.txt","a+");
		$newComment = $_POST['comment'];
		fwrite($writeHandle, $newComment);
		fwrite($writeHandle, "</br>");
		fclose($writeHandle);
	}
}
echo "Previous comments:</br>";
$readHandle = fopen("sample.txt",'r');
while ($line = fgets($readHandle)){
	 echo "$line";
}
fclose($readHandle);
?>

<!DOCTYPE html>
<head>
	<title>Marek Lopez A13 PHP Demo</title>
</head>
<body>
<form name='addComment' action="<?php echo $_SERVER['PHP_SELF'];?>" method='post'>
	 Enter a comment:<input type='text' name='comment' autofocus="autofocus"/>
	 <input type='submit' value='Submit comment' />
</form>
</body>
</html>

