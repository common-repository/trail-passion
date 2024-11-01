<?php
  /**
   * Ce fichier PHP permet d'appeler les services qui se trouvent dans le
   * sous-répertoire "svc".
   * Voici les paramètres attendus :
   *   - "s" (service) : Nom du service.
   *   - "i" (input) :
   */
ob_start();

include_once("db.inc");

// Cross Site Origin.
//header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS');
header('Access-Control-Max-Age: 900');

date_default_timezone_set("Europe/Paris");

// Protection contre les modification de quotes selon la config du serveur PHP.
if (get_magic_quotes_gpc()) {
    $process = array(&$_GET, &$_POST, &$_COOKIE, &$_REQUEST);
    while (list($key, $val) = each($process)) {
        foreach ($val as $k => $v) {
            unset($process[$key][$k]);
            if (is_array($v)) {
                $process[$key][stripslashes($k)] = $v;
                $process[] = &$process[$key][stripslashes($k)];
            } else {
                $process[$key][stripslashes($k)] = stripslashes($v);
            }
        }
    }
    unset($process);
}

echo "<pre style='border: 1px solid black'>";
echo date("d/m/Y H:i:s");
echo " (from " . $_SERVER["REMOTE_ADDR"] . ")\n";
print_r($_REQUEST);
echo "<hr/>\n";

@session_start();

echo SID . "<br/>\n";

@$service = $_REQUEST['s'];
// Vérification de la validité du nom de service.
// Il ne doit contenir que des lettres, des chiffres et des points.
for ($i=0 ; $i<strlen($service) ; $i++) {
  $c = $service[$i];
  if ($c == '.') continue;
  if ($c >= '0' && $c <= '9') continue;
  if ($c >= 'a' && $c <= 'z') continue;
  if ($c >= 'A' && $c <= 'Z') continue;
  // On a détecté un nom de service invalide.
  die("Invalid service name: $service");
 }

// Paramètre d'entrée.
echo "Input = " . $_REQUEST['i'] . "\n";
@$input = json_decode($_REQUEST['i'], true);
/*
switch (json_last_error()) {
 case JSON_ERROR_DEPTH:
   echo ' - Profondeur maximale atteinte';
   break;
 case JSON_ERROR_STATE_MISMATCH:
   echo ' - Inadéquation des modes ou underflow';
   break;
 case JSON_ERROR_CTRL_CHAR:
   echo ' - Erreur lors du contrôle des caractères';
   break;
 case JSON_ERROR_SYNTAX:
   echo ' - Erreur de syntaxe ; JSON malformé';
   break;
 case JSON_ERROR_UTF8:
   echo ' - Caractères UTF-8 malformés, probablement une erreur d\'encodage';
   break;
 default:
   echo ' - Erreur inconnue';
   break;
}
*/
$output = Array();

// Déclarer les objets d'accès aux donées publiques et privées.

// Inclure le code du service qui doit fournir une fonction execService().
// Il doit aussi redéfinir la variable $ROLE qui donne le role nécessaire
// à l'appel de ce service. Si $ROLE est vide, tout le monde est autorisé.
$ROLE = "ADMINISTRATOR";
include "svc/$service.php";

echo "<pre>SERVER:";
print_r($_SERVER);
echo "</pre>";

try {
  $output = execService($input);
}
catch (Exception $e) {
  echo "<pre>";
  echo $e->getMessage();
  echo "</pre>\n";
  $output = "ERROR";
}
// Fermer la connexion à la base de données.
$DB = null;

$json = json_encode($output);
echo "<hr/>\n";
echo $json;
echo "</pre>";

$output = ob_get_clean();
//error_log($output, 3, $logfile);

// Paramètre de sortie.
echo $json;
?>
