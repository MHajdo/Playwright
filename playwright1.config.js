const {playwrightTestConfig} = require('@playwright/test')

const config = {
    retries: 1,
    timeout: 60000,
    use: {
        baseURL: "https://the-internet.herokuapp.com",
        headless: true,
        viewport: {width: 1280, height: 720},
        // some video options: off, on, retain-on-failure, on-first-retry,...
        video: 'retain-on-failure',
        // some screenshotting options: off, on, only-on-failure, ... 
        screenshot: 'only-on-failure'
    },
    projects: [
        {
            name: 'Chrome',
            use: {browserName: 'chromium'}
        },
        {
            name: 'Firefox',
            use: {browserName: 'firefox'}
        },
        {
            name: 'Webkit',
            use: {browserName: 'webkit'}
        },
    ]
};

module.exports = config;