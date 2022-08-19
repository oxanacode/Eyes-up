import LocalStorageService from '../storage/local-storage';
import State from './state';
import RenderPage from '../../layout/render-page';

import { CurrentState } from '../../types/interfaces';

class ManageState {
  public static updateState(): void {
    const currentState: CurrentState | null =
      LocalStorageService.getItem('eyesUpState');

    if (currentState) {
      State.currentUser = currentState.currentUser;
      State.currentPage = currentState.currentPage;
      State.currentLang = currentState.currentLang;
      State.alternativeLang = currentState.alternativeLang;
      State.currentTheme = currentState.currentTheme;
      State.alternativeTheme = currentState.alternativeTheme;
    }
  }

  public static saveState(): void {
    const stateToSave: CurrentState = {
      currentUser: State.currentUser,
      currentPage: State.currentPage,
      currentLang: State.currentLang,
      alternativeLang: State.alternativeLang,
      currentTheme: State.currentTheme,
      alternativeTheme: State.alternativeTheme,
    };

    LocalStorageService.setItem('eyesUpState', stateToSave);
  }

  public static applyState(): void {
    ManageState.saveState();
    RenderPage.renderPage();
  }
}

export default ManageState;
