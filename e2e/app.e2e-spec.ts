import { CatalagoFilmesSWAPIPage } from './app.po';

describe('catalago-filmes-swapi App', function() {
  let page: CatalagoFilmesSWAPIPage;

  beforeEach(() => {
    page = new CatalagoFilmesSWAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
