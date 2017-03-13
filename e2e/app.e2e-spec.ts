import { Grails3Angular2Page } from './app.po';

describe('grails3-angular2 App', () => {
  let page: Grails3Angular2Page;

  beforeEach(() => {
    page = new Grails3Angular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
