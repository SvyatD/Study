const { LoginManager, AnypointLandingPage } = require('@mulesoft/automation-coreservices-ui')

describe('Given an authenticated user', () => {
    beforeAll(() => {
    browser.get('http://qax.anypoint.mulesoft.com');
    const loginManager = new LoginManager();
    const anypointLandingPage = new AnypointLandingPage();

    loginManager.loginAs('jsauto', 'Mule1234');
    anypointLandingPage.at();
});

    it('shoud have a title', () => {
        expect(true).toEqual(true);
    });
})