// Load the dotenv package
require('dotenv').config();

// Access environment variables
const config = {
  apiKey: process.env.che11,
  serverSecret: process.env.ct19,
  isKalvian: process.env.IS_KALVIAN === 'true',
};

// Export the config object
module.exports = config;

// Log the variables (Optional for testing)
console.log(config);