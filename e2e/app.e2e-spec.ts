import { SalonNetAppPage } from './app.po';

describe('salon-net-app App', () => {
  let page: SalonNetAppPage;

  beforeEach(() => {
    page = new SalonNetAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
