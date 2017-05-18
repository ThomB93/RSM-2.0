import { RsmPage } from './app.po';

describe('rsm App', function() {
  let page: RsmPage;

  beforeEach(() => {
    page = new RsmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
