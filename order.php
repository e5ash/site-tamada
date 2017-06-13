<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['comment'])) {$comment = $_POST['comment'];}
if (isset($_POST['data'])) {$data = $_POST['data'];}

$message = "Имя: $name\nТелефон: $phone";

if ($email== true) {
	$message .= "\nПочта: $email";
}
if ($comment == true) {
	$message .= "\nКомментарий: $comment";
}
if ($data == true) {
	$message .= "\nДата: $data";
}

$to = "dot.zinger.dot@gmail.com"; // Сюда вписать емейл, на который будут приходить заявки
$headers = "Content-type: text/plain; charset = windows-1251";
$subject = "Новый заказ с сайта!";
$send = mail($to, $subject, $message, $headers);
?>