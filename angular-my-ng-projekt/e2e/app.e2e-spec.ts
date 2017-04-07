import { AngularMyNgProjektPage } from './app.po';

describe('angular-my-ng-projekt App', () => {
  let page: AngularMyNgProjektPage;

  beforeEach(() => {
    page = new AngularMyNgProjektPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
