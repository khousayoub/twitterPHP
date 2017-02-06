<?php
  header('Access-Control-Allow-Origin: *');
var $logs = array(
array (
  "user" => "ayb",
  "password" => "azerty",
  "email" => "a@a.com",
  "name" =>  "ayoub",
  "lastName" => "khous",
),
array (
  "user" => "okdi",
  "password" => "azerty",
  "email" => "o@o.com",
  "name" =>  "okba",
  "lastName" => "hamidi",
),
array (
  "user" => "jam",
  "password" => "azerty",
  "email" => "j@j.com",
  "name" =>  "jamil",
  "lastName" => "rahou",
),
array (
  "user" => "fel",
  "password" => "azerty",
  "email" => "f@f.com",
  "name" =>  "felix",
  "lastName" => "lastname",
));

echo "Name : ".$logs->user."\n";
echo "Email : ".$logs->password."\n";
 ?>
