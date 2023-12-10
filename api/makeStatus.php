<?php
    $json = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/data/status.json'), true);
    $json[$_GET['name']] = 1 - $json[$_GET['name']];
    file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/data/status.json', json_encode($json));
?>