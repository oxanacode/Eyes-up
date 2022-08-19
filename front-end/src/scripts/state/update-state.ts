import LocalStorageService from '../storage/local-storage';
import State from './state';
import RenderPage from '../../layout/render-page';

import { CurrentState } from '../../types/interfaces';

class UpdateState {
  public static updateState(): void {
    const currentState: CurrentState | null =
      LocalStorageService.getItem('eyesUpState');

    if (currentState) {
      State.currentUser = currentState.user;
      State.currentPage = currentState.page;
      State.currentLang = currentState.lang;
      State.currentTheme = currentState.theme;
    }
  }

  public static saveState(): void {
    const stateToSave: CurrentState = {
      user: State.currentUser,
      page: State.currentPage,
      lang: State.currentLang,
      theme: State.currentTheme,
    };

    LocalStorageService.setItem('eyesUpState', stateToSave);
  }

  public static applyState(): void {
    UpdateState.saveState();
    RenderPage.renderPage();
  }
}

export default UpdateState;
