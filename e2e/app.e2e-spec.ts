import { JegybazarPage } from './app.po';

describe('jegybazar App', () => {
  let page: JegybazarPage;

  beforeEach(() => {
    page = new JegybazarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
