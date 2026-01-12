<?php
// Check if requesting config.js (handle multiple request formats)
$requestUri = $_SERVER['REQUEST_URI'];
$isConfigRequest = (
    strpos($requestUri, 'config.js') !== false ||
    pathinfo($requestUri, PATHINFO_FILENAME) === 'config.js' ||
    $_SERVER['SCRIPT_NAME'] === '/config.js'
);

if ($isConfigRequest) {
      header('Content-Type: application/javascript');
      header('Cache-Control: no-cache, must-revalidate');
      echo 'const AIRTABLE_CONFIG = {' . "\n";
      echo "  baseId: '" . getenv('AIRTABLE_BASE_ID') . "'," . "\n";
      echo "  apiKey: '" . getenv('AIRTABLE_API_KEY') . "'," . "\n";
      echo "  tableId: '" . getenv('AIRTABLE_TABLE_ID') . "'" . "\n";
      echo '};' . "\n";
      exit;
}

// Default behavior - redirect to index.html
header('Location: /index.html');
?>
