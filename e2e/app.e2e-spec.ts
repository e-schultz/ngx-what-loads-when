import { NgxWhatLoadsWhenPage } from './app.po';

describe('ngx-what-loads-when App', function() {
  let page: NgxWhatLoadsWhenPage;

  beforeEach(() => {
    page = new NgxWhatLoadsWhenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
