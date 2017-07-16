describe('Given an authenticated user', () => {
  const usernameField = $$('input[name="username"]').first();
  const passwordField = $$('input[name="password"]').first();
  const signInButton = $$('button[id="form-undefined-primary-action-button"]').first();
//  const apiManagerHref = $$('a[class="Hero__target___UzNMh"]');


  beforeEach( async () => {
    await browser.get('http://qax.anypoint.mulesoft.com');
    await usernameField.sendKeys('jsauto');
    await passwordField.sendKeys('Mule1234');
    await signInButton.click();
  });

  it('main menu page shoud have a title', () => {
      expect(browser.getTitle()).toEqual('Anypoint Platform');
  });

//  it('main menu page shoud have a title', async () => {
//    await apiManagerHref.click()
//    expect(browser.getTitle()).toEqual('Anypoint Platform for APIs');
//  });
})