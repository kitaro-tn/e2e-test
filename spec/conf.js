exports.config = {
  framework: 'jasmine',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=1280,1024" ]
    }
  },
  specs: '**/*[sS]pec.js',
  jasmineNodeOpts: {
    showColors: true,
  }
};
