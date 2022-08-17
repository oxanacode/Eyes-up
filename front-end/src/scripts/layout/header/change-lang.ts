import RenderPage from '../../../layout/render-page';
import State from '../../state';

import { Lang } from '../../../types/enums';

class ChangeLang {
  public static changeLang(lang: Lang): void {

    if (State.currentLang === lang) return;

    State.currentLang === lang;
    RenderPage.renderPage();
  }
}

export default ChangeLang;