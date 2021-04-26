<?
  $mysqli = new mysqli('localhost','grigorevai_v','SG%xX6NS','grigorevai_v');
  $date = $_POST['date'];
  $time = $_POST['time'];
  $master = $_POST['master'];
  $result = $mysqli->query("SELECT * FROM `test` WHERE date='$date' AND time='$time' AND master='$master'");
  if($result->num_rows){
    echo json_encode(['result'=>'busy']);
  }else{
    echo json_encode(['result'=>'avialable']);
  }
?>