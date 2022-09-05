import CreateElement from './app-scripts/app-create-element';
import GameState from './game-state';
import UserData from './data-handler';
import { levelMaxScore } from './level-functionality/levels-values';
import State from './app-scripts/app-state';
import badgesDescription from '../../data/badges-description';

import { Tag, AchievementsValues } from './game-types/enums';
import { Iachievement } from './game-types/interfaces';

class Achievements {
  static windowsCounter = 0;

  static current: Iachievement = {
    hero: false,
    legend: false,
  };

  static createModal(textContent: string, path: string) {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-modal' }]);
    const title = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-title' }]);
    const text = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-text' }]);
    const img = CreateElement.createElement(Tag.img, [
      { name: 'class', value: 'achievement-img' },
      { name: 'alt', value: 'achievement-image' },
      { name: 'src', value: path },
    ]);
    const textWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-text-wrapper' }]);
    let top = AchievementsValues.achievementStyleTop;

    title.textContent = GameState.lib.achievementTitle as string;
    text.textContent = textContent;
    textWrapper.append(title, text);
    modal.append(img, textWrapper);

    for (let i = 0; i < Achievements.windowsCounter; i += 1) {
      top += AchievementsValues.achievementAnotherModal;
    }
    modal.style.top = `${top}rem`;

    GameState.gameWrapper.append(modal);
    Achievements.windowsCounter += 1;

    setTimeout(() => {
      modal.remove();
      Achievements.windowsCounter -= 1;
    }, AchievementsValues.achievementTimer);
  }

  static achievementChecker() {
    if (!Achievements.current.hero) Achievements.achievementHero();
    if (!Achievements.current.legend) Achievements.achievementLegend();

    Achievements.achievementSetStatus();
  }

  static achievementSetStatus() {
    GameState.achievementCurrentStatus = Achievements.current;
  }

  static achievementHero() {
    if (UserData.lvlsDone !== 10) return;

    Achievements.createModal(
      badgesDescription[AchievementsValues.hero][State.currentLang].text,
      './assets/images/badges/badge-10.svg'
    );
    Achievements.current.hero = true;
  }

  static achievementLegend() {
    const lvlsKeys = Object.keys(UserData.levels);
    const scores = lvlsKeys.map((key) => UserData.levels[key].score);
    let totalMaxLvls = true;

    scores.forEach((score, index) => {
      if (score !== levelMaxScore[index]) totalMaxLvls = false;
    });

    if (!totalMaxLvls) return;

    Achievements.createModal(
      badgesDescription[AchievementsValues.legend][State.currentLang].text,
      './assets/images/badges/badge-11.svg'
    );
    Achievements.current.legend = true;
  }
}

export default Achievements;
