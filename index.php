<?php
// Check if requesting config.js
if (strpos($_SERVER['REQUEST_URI'], 'config.js') !== false) {
      header('Content-Type: application/javascript');
      echo 'const AIRTABLE_CONFIG = {' . "\n";
      echo "  baseId: '" . getenv('AIRTABLE_BASE_ID') . "'," . "\n";
      echo "  apiKey: '" . (getenv('AIRTABLE_API_KEY') ?: getenv('AIRTABLE_TOKEN')) . "'," . "\n";
      echo "  tableId: '" . getenv('AIRTABLE_TABLE_ID') . "'" . "\n";
      echo '};' . "\n";
      exit;
}

// Default behavior - redirect to index.html
header('Location: /index.html');
?>
