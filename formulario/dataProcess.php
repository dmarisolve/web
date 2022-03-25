<html lang="es">
<head>
<title>Envio de Menasaje</title>
<style type="text/css">
body {
	background-color: #d6d7b5;
}
</style>
</head>
<?php
$nombre = $_POST['nombre'];
$mail = $_POST['mail'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'hernandez0424@dmarisol.net23.net';
$asunto = 'Contacto Diseños Marisol';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo 'Su formulario ha sido enviado con exito. Pronto le estaremos contactandol@. Gracias por visitar Diseños Marisol.';

?>

<br><br><br>
<a href="http:\\www.dmarisol.net23.net" title="Inicio">REGRESAR A LA PAGINA PRINCIPAL</a>

</html>