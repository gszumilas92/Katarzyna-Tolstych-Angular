import { KatarzynaTolstychPage } from './app.po';

describe('katarzyna-tolstych App', () => {
  let page: KatarzynaTolstychPage;

  beforeEach(() => {
    page = new KatarzynaTolstychPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
