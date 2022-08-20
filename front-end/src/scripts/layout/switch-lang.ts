import State from '../state/state';
import ManageState from '../state/manage-state';

import { Lang } from '../../types/enums';
import { RenderHandler } from '../../types/types';

class SwitchLang {
  public static changeLang(): void {
    State.currentLang = State.currentLang === Lang.en ? Lang.ru : Lang.en;
  }

  public static applyLang(render: RenderHandler): void {
    SwitchLang.changeLang();
    ManageState.saveState();
    render();
  }
}

export default SwitchLang;
