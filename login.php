<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    $lines = file("users.txt", FILE_IGNORE_NEW_LINES);
    $authenticated = false;

    foreach ($lines as $line) {
        list($storedUser, $storedPass) = explode(":", $line);
        if ($username === $storedUser && $password === $storedPass) {
            $authenticated = true;
            break;
        }
    }

    if ($authenticated) {
        echo "<p style='color: green;'>Connexion réussie. Bienvenue, $username !</p>";
    } else {
        echo "<p style='color: red;'>Nom d'utilisateur ou mot de passe incorrect.</p>";
    }
}
?>
