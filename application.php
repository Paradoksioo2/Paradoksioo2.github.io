<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Проверяем, что данные формы были отправлены методом POST

    // Получаем данные из формы
    $method = $_POST['var'];
    $name = $_POST['call'];
    $phone = $_POST['number'];

    // Адрес электронной почты, на который вы хотите отправить данные
    $to_email = "obivkavdom@mail.ru";

    // Формируем тему письма
    $subject = "Новый запрос от пользователя";

    // Формируем тело письма
    $message = "Метод связи: " . $method . "\n";
    $message .= "Имя: " . $name . "\n";
    $message .= "Телефон: " . $phone . "\n";

    $headers = "From: webmaster@example.com" . "\r\n" .
               "Reply-To: webmaster@example.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);
    
    // Перенаправление обратно на страницу формы после отправки письма
    header("Location: index.html");
    exit;
}
?>