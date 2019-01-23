<?php

$data = $_POST['data'];

// $email = htmlspecialchars($email);
// $question = htmlspecialchars($question);


// $email = urldecode($email);
// $question = urldecode($question);


// $email = trim($email);
// $question = trim($question);

mail(
    "technikazhivi@yandex.ru", 
    "Новая заявка на звонок", 
    "Заявка \r\n". 
    "Что у Вас: " . $data['brand'] . "\r\n" . 
    "Укажите тип: " . $data['problems'] . "\r\n" .
    "Тип поломки: " . $data['type'] . "\r\n" . 
    "Номер телефона: " . $data['phone'] . "\r\n"
);
