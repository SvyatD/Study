const { LoginManager, AnypointLandingPage, CoreServicesNavigator } = require('@mulesoft/automation-coreservices-ui');

const navigator = new CoreServicesNavigator();

describe('Given an authenticated user on anypoint platform.', () => {
  beforeAll(() => {
  browser.get('http://qax.anypoint.mulesoft.com');
  const loginManager = new LoginManager();
  const anypointLandingPage = new AnypointLandingPage();

  loginManager.loginAs('jsauto', 'Mule1234');
  anypointLandingPage.at();
  });

  describe('When navigates to API Manager:', () => {
    navigator.goToApiManager();
  });

  it('should have a title', ()=> {
    expect(browser.getTitle()).toBe('Anypoint Platform for APIs / API Administration');
  });
})


