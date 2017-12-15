import { SimpleAngular2Page } from './app.po';

describe('simple-angular2 App', () => {
  let page: SimpleAngular2Page;

  beforeEach(() => {
    page = new SimpleAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
