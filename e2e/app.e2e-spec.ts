import { RegistrationFormPage } from './app.po';

describe('registration-form App', function() {
  let page: RegistrationFormPage;

  beforeEach(() => {
    page = new RegistrationFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
