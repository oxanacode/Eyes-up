import RenderPage from '../../../layout/render-page';
import State from '../../state';

import { Language } from '../../../types/enums';

class ChangeLanguage {
  public static changeLanguage(language: Language): void {

    if (State.currentLanguage === language) return;

    State.currentLanguage === language;
    RenderPage.renderPage();
  }
}

export default ChangeLanguage;