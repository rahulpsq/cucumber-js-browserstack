exports.config = {
  user: 'BROWSERSTACK_USERNAME',
  key: 'BROWSERSTACK_ACCESS_KEY',
  server: 'hub-cloud.browserstack.com',

  capabilities: [
    {
      'browserName': 'Chrome',
      'browserstack.use_w3c': true,
      'bstack:options': {
        'os': 'Windows',
        'osVersion': '7',
        'sessionName': 'Bstack local cucumber-js',
        'buildName': 'browserstack-build-1',
        'source': 'cucumber-js:sample-selenium-4-v1.0',
        'projectName': 'Test App',
        'debug': true,
        'local': true
      },
    }
  ]
}
