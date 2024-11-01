<?php
$ROLE = "";

/**
 * 
 */
function execService($input) {
  global $DB;
  
  $limit = 200;
  $out = Array("lat" => Array(),
               "lng" => Array(),
               "id" => Array(),
               "title" => Array(),
               "summary" => Array(),
               "url" => Array());
  $sql = "SELECT P.id, P.post_title, L.lat, L.lng, P.post_mime_type, P.guid, P.post_excerpt "
     . "FROM " . $DB->table('geo_mashup_location_relationships') . " As R, "
     . $DB->table('geo_mashup_locations') . " As L, "
     . $DB->table('posts') . " As P "
     . "WHERE R.object_id = P.id "
     . "AND R.location_id = L.id "
     . "AND (L.lat <> 0 OR L.lng <> 0)"
     . "ORDER BY P.post_date DESC";
  $stm = $DB->query($sql);
  while( ($row = $stm->fetch()) && $limit > 0 ) {

    $out["id"][] = intVal($row[0]);
    $out["title"][] = $row[1];
    $out["lat"][] = floatVal($row[2]);
    $out["lng"][] = floatVal($row[3]);
    $mime = $row[4];
    $url = $row[5];
    if ($mime == '') $url = "";
    if ($url != "") {
      $idx = strpos($url, "/wp-content/");
      $url = substr($url, $idx + 12);
    }
    $out["url"][] = $url;
    $out["summary"][] = $row[6];
    $limit--;
  }

  //$out["SQL"] = $sql;
  return $out;
}

?>
