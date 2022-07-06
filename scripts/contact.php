#!/usr/bin/php-cgi
<?php
// Get POST data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create Message
$formcontent="From: $name \n Message: $message";
$recipient = "j2ramper@uwaterloo.ca";
$subject = "Personal Site Contact Form";
$mailheader = "From: $email \r\n";

// Send message
if( mail($recipient, $subject, $formcontent, $mailheader) ){
  echo "Message sent!";
}else{
  echo "Message failed to send";
}
?>
