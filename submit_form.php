<?php
    if($_POST["message"]) {
        mail(
            "towfiqueelahe6@gmail.com",
            "From demo website",
            "Message: ".$_POST["message"],
            "Name: ".$_POST["name"]."|| Budget: ".$_POST["budget"]."|| Email: ".$_POST["email"],
        );
        header('Location: ./index.html#contact');
    }
?>