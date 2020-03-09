<?php
$email_address = $_POST['email'];
$message = $_POST['message'];

$headers = "From: $email_address\n";
$sent = mail('conorkemp@gmail.com', 'Message', $message, $headers);

if ($sent) {

    ?><html>
    <head>
    <title>Success!</title>
    </head>
    <body>
        <h1>Success!</h1>
    </body>
    </html>
    <?php
    
    } else {
    
    ?><html>
    <head>
    <head>
    <title>Error!</title>
    </head>
    <body>
        <h1>Error!</h1>
    </body>
    </html>
    <?php
    }
?>