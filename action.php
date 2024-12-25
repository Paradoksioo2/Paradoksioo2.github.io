<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['user'];
    $phone = $_POST['phone'];
    
    // Адрес, на который будет отправлено письмо
    $to = "obivkavdom@mail.ru";
    
    // Тема письма
    $subject = "Новая заявка с сайта";
    
    // Содержимое письма
    $message = "Имя: " . $user . "\n";
    $message .= "Телефон: " . $phone . "\n";
    
    // Дополнительные заголовки
    $headers = "From: webmaster@example.com" . "\r\n" .
               "Reply-To: webmaster@example.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Отправка письма
    mail($to, $subject, $message, $headers);
    
    // Перенаправление обратно на страницу формы после отправки письма
    header("Location: index.html");
    exit;
}
?>