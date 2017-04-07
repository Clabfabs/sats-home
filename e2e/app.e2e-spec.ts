import { SatsHomePage } from './app.po';

describe('sats-home App', () => {
  let page: SatsHomePage;

  beforeEach(() => {
    page = new SatsHomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
