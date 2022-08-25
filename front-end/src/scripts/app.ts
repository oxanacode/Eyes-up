import RenderPage from '../layout/render-page';

class App {
  public static start(): void {
    RenderPage.renderPage();
    window.localStorage.clear();
  }
}

export default App;
