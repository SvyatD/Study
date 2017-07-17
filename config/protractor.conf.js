let { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test/LoginTest.js'],
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
            displayStacktrace: true
          }
        }));
    }
}



