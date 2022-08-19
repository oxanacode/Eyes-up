import CreateElement from '../../elements/create-element';
import State from '../../../scripts/state/state';
import ChangeLang from '../../../scripts/layout/change-lang';
import UpdateState from '../../../scripts/state/update-state';

import { Lang, Tag, Theme } from '../../../types/enums';

class LangSwitcher {
  public static createLanguageSwitcher(
    className: string,
    lang: Lang
  ): HTMLElement {
    const langSwitcher = CreateElement.createElement(Tag.btn, [
      { name: 'class', value: className },
    ]);

    if (State.currentTheme === Theme.light) {
      langSwitcher.classList.add('класс светлой темы для элемента');
    } else {
      langSwitcher.classList.add('класс темной темы для элемента');
    }

    langSwitcher.textContent =
      State.currentLang === Lang.en
        ? 'текст на английском'
        : 'текст на русском';
    langSwitcher.addEventListener('click', () => {
      ChangeLang.changeLang(lang);
      UpdateState.applyState();
    });

    return langSwitcher;
  }
}

export default LangSwitcher;
