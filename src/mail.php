<?php
    $message_sent = false;
    if(isset($_POST['mail']) && $_POST['mail'] != ''){

        if ( filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL) ){
            $name = $_POST['name'];
            $raisonsociale = $_POST['raisonsociale'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $message = $_POST['message'];

        
            $to = "tonymascatedev@gmail.com";
            $header .= "Content-type:text/html; charset=UTF-8";
            $body = "<html>

            <style>
                .global{
                    max-width: 600px;
                    width: 100%;
                    margin: auto; 
                    border: 5px solid #f1f1f167;
                }
                .title{
                    width: 100%; 
                    height: 100px; 
                    background-color: #7B0086; 
                    margin: 0; 
                    display: flex; 
                    justify-content: center; 
                    align-items: center;
                }
                h2{
                    margin: 0; 
                    font-size: 38px; 
                    font-weight: 600; 
                    color: white;
                    line-height: 45px;
                }
                p{
                    border-bottom: 5px solid #f1f1f167;
                }
                span{
                    font-weight: bold;
                    color: #7B0086;
                }
                .elements{
                    background-color: white;
                    padding: 20px;
                }
        
            </style>
        
            <body>
                <div class='global'>
                    <div class='title'>
                        <h2>Contact depuis le site</h2>
                    </div>
                    <div class='elements'>
                        <p><span>Nom : </span><br>".htmlspecialchars($name)."</p>
                        <p><span>Raison Sociale : </span><br>".htmlspecialchars($raisonsociale)."</p>
                        <p><span>Email : </span><br>
                        ".htmlspecialchars($mail)."</p>
                        <p><span>Téléphone : </span><br>
                        ".htmlspecialchars($phone)."</p>
                        <p><span>Message : </span><br>
                        ".htmlspecialchars($message)."</p>
                    </div>
                </div>
            </body>
        </html>";
        
            mail($to, $body, $header);
        
            header ("Location: /");
        }
    }

    

?>