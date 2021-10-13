<?php
  if (isset($_POST['action']) && $_POST['action']=='msg') {
    print_r($_POST);
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $subject = $_REQUEST['sub'];
    $message = $_REQUEST['message'];
    if (empty($name)||empty($email)||empty($message) || empty($subject)) {
				echo "no";
		}else {
			mail("banjirahammad@gmail.com", $subject, $message,"From: $name <$email>");
      echo "yes";
		}
  }


 ?>
