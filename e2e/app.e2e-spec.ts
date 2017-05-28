import { QuizUpUiPage } from './app.po';

describe('quiz-up-ui App', () => {
  let page: QuizUpUiPage;

  beforeEach(() => {
    page = new QuizUpUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
