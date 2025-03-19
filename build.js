const fs = require('fs');
const path = require('path');

// Read the firebase config template
const configPath = path.join(__dirname, 'js', 'firebase-config.js');
let configContent = fs.readFileSync(configPath, 'utf8');

// Replace environment variables with actual values
const envVars = {
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
};

Object.entries(envVars).forEach(([key, value]) => {
  configContent = configContent.replace(
    new RegExp(`process\\.env\\.${key}`, 'g'),
    `"${value}"`
  );
});

// Write the updated config back to the file
fs.writeFileSync(configPath, configContent); 