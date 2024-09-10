const fs = require('fs');
const path = require('path');
const apkPath = path.join(__dirname, "hey-linda-prod.apk");

exports.config = {
  port: 4723,

  specs: [
    "./tests/specs/**/*.js", //not default location
  ],

  maxInstances: 10,

  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Pixel 4 API 30(R)",
      "appium:platformVersion": "11.0",
      "appium:automationName": "UIAutomator2",
      "appium:app": apkPath,
    },
  ],

  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: ["appium"],

  framework: "mocha",

  specFileRetries: 1,
  specFileRetriesDelay: 0,
  specFileRetriesDeferred: false,

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  
};
