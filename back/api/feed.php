<?php
  header('Access-Control-Allow-Origin: http://localhost:8080');
  $tweets = array(
  array (
    "user" => "McGyver",
    "pic" => "mcg.jpg",
    "tweet" => " je vends sur le boncoin une scie à métaux, un tournevis et un réacteur nucléaire @KimJungII ?",
    "date" =>  "30/01/2017",
    "like" => "87",
  ),
  array (
    "user" => "The riddle",
    "pic" => "riddle.jpg",
    "tweet" => "I am the Goddam Batman! Naaaahhhh",
    "date" =>  "30/01/2017",
    "like" => "2",
  ),
  array (
  "user" => "Vader",
  "pic" => "vader.jpg",
  "tweet" => "I am your mother",
  "date" => "30/01/2017",
  "like" => "65",
),
  array (
  "user" => "Conan",
  "pic" => "conan.jpg",
  "tweet" => "Every day I am hustlin hustlin hustlin",
  "date" =>  "30/01/2017",
  "like" => "4",
));
$x = json_encode($tweets);
echo $x;
 ?>
