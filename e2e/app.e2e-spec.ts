import { EdmAppPage } from './app.po';

describe('edm-app App', () => {
  let page: EdmAppPage;

  beforeEach(() => {
    page = new EdmAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
