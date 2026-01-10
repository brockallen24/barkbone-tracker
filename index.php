<?php
// Check if requesting config.js
if (pathinfo($_SERVER['REQUEST_URI'], PATHINFO_FILENAME) === 'config.js') {
      header('Content-Type: application/javascript');
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
