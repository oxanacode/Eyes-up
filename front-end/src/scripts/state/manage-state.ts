import LocalStorageService from '../storage/local-storage';
import State from './state';

import { CurrentState } from '../../types/interfaces';

class ManageState {
  public static updateState(): void {
    const currentState: CurrentState | null = LocalStorageService.getItem('eyesUpState');

    if (currentState) {
      State.currentUser = currentState.currentUser;
      State.currentPage = currentState.currentPage;
      State.currentLang = currentState.currentLang;
      State.currentTheme = currentState.currentTheme;
      State.currentLayout = currentState.currentLayout;
      State.currentComplexity = currentState.currentComplexity;
      State.currentLessonBg = currentState.currentLessonBg;
      State.currentLessonFontSize = currentState.currentLessonFontSize;
      State.currentLessonFontFamily = currentState.currentLessonFontFamily;
      State.currentLessonSound = currentState.currentLessonSound;
      State.currentLessonSkin = currentState.currentLessonSkin;
    }
  }

  public static saveState(): void {
    const stateToSave: CurrentState = {
      currentUser: State.currentUser,
      currentPage: State.currentPage,
      currentLang: State.currentLang,
      currentTheme: State.currentTheme,
      currentLayout: State.currentLayout,
      currentComplexity: State.currentComplexity,
      currentLessonBg: State.currentLessonBg,
      currentLessonFontSize: State.currentLessonFontSize,
      currentLessonFontFamily: State.currentLessonFontFamily,
      currentLessonSound: State.currentLessonSound,
      currentLessonSkin: State.currentLessonSkin,
    };

    LocalStorageService.setItem('eyesUpState', stateToSave);
  }
}

export default ManageState;
