import { ShelfPage } from './app.po';

describe('shelf App', () => {
  let page: ShelfPage;

  beforeEach(() => {
    page = new ShelfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
