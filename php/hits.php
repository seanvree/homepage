<?php
    $counts = ("counter.txt");
    $hits = file($counts);
    $hits[0] ++;
    $fp = fopen($counts, "w");
    fputs($fp , "$hits[0]");
    fclose($fp);
    header("Content-type: text/javascript");
    echo "document.write('" . $hits[0] . "');";
?>