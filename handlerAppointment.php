<?php
  $mysqli = new mysqli('localhost','grigorevai_v','SG%xX6NS','grigorevai_v');
  $name = $_POST['name'];
  $phone = trim($_POST['phone']);
  $email = trim(mb_strtolower($_POST['email']));
  $service = $_POST['service'];
  $date = $_POST['date'];
  $time = $_POST['time'];
  $master = $_POST['master'];

  $result = $mysqli->query("INSERT INTO `test`(`name`, `phone`, `email`, `service`, `date`, `time`, `master`) VALUES ('$name','$phone','$email','$service','$date','$time','$master')");
  echo json_encode(['result'=>'success']);
  mail($email, 'Запись в салон Брутальный Хмырь', "Здравствуйте! Вы записаны в салон Брутальный хмырь на $service к мастеру $master на $date в $time");

?>