<?php
  $to_email = 'dianajosephm12@gmail.com';
  $subject = 'Someone contacted you from your site!';
  $message = $_POST['message'];

  // this may need configuring depending on your host. If you find the email isn't
  // being sent, look up the error you're receiving or post another question here on
  // SO.
  mail($to_email, $subject, $message);

  header('Location: /');
  
?>