import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state';
import ChangeLanguage from '../../../scripts/layout/header/change-language';

import { Language, Tag, Theme } from '../../../types/enums';

class LanguageSwitcher {
  public static createLanguageSwitcher(className: string, language: Language): HTMLElement {
    const langSwitcher = CreateElement.createElement(Tag.link, [{ name: 'class', value: className }]);

    if (State.currentTheme === Theme.light) {
      langSwitcher.classList.add('класс светлой темы для элемента');
    } else {
      langSwitcher.classList.add('класс темной темы для элемента');
    }

    langSwitcher.textContent = State.currentLanguage === Language.en
      ? 'текст на английском'
      : 'текст на русском';
    langSwitcher.addEventListener('click', () => { ChangeLanguage.changeLanguage(language) });

    return langSwitcher;
  }
}

export default LanguageSwitcher;