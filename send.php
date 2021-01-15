<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\OAuth;
    
    $name = $_POST['user_name'];
    $email = $_POST['user_email'];
    $error = 'xn----8sbpj1akeecdle1m.xn--p1ai/404.html';
    
    require_once "PHPMailer/src/PHPMailer.php";
    require_once "PHPMailer/src/SMTP.php";
    require_once "PHPMailer/src/Exception.php";
    require 'PHPMailer/src/OAuth.php';
    
    $mail = new PHPMailer();
    $mail->CharSet = "utf-8";

    //smtp settings
    $mail->isSMTP();
    $mail->Host = "smtp.mail.ru";
    $mail->SMTPAuth = true;
    $mail->Username = "yurist_partner@mail.ru";
    $mail->Password = 'Salaaaaaaaaam1';
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    //email settings
    $mail->isHTML(true);
    $mail->setFrom('yurist_partner@mail.ru.com', 'Юрист-партнер.рф');
    $mail->addAddress('yurist_partner@mail.ru', 'Юрист-партнер.рф');

    $mail->Subject = 'Заявка с сайта Юрист-партнер.рф';
    $mail->Body = '-Codovstvo<br>-'.$name . ' оставил заявку<br>-его телефон ' .$email. '';
    $mail->AltBody = '';
    $mail->SMTPDebug = 1;

    if (empty($_POST['user_email']) || empty($_POST['user_name']) || preg_match('/[0-9]/', $_POST['user_name'])) {
        header('Location: '.$error);
    } else {
        if(!$mail->send()) {
            header('Location: '.$error);
        } else {
            header('Location: index.html');
        }
    }
?>