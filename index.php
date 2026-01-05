<?php
// Check if requesting config.js
if (pathinfo($_SERVER['REQUEST_URI'], PATHINFO_FILENAME) === 'config.js') {
      header('Content-Type: application/javascript');
      echo 'const AIRTABLE_CONFIG = {' . "\n";
      echo "  baseId: '" . getenv('AIRTABLE_BASE_ID') . "'," . "\n";
      echo "  token: '" . getenv('AIRTABLE_TOKEN') . "'" . "\n";
      echo '};' . "\n";
      exit;
}

// Default behavior - redirect to index.html
header('Location: /index.html');
?>
