import CreateElement from './app-scripts/app-create-element';
import GameState from './game-state';
import UserData from './data-handler';
import { levelMaxScore } from './level-functionality/levels-values';
import State from './app-scripts/app-state';
import badgesDescription from '../../data/badges-description';

import { Tag, AchievementsValues } from './game-types/enums';

class Achievements {
  static windowsCounter = 0;

  static current = {
    hero: false,
    legend: false,
  };

  static createModal(titleContent: string, textContent: string, path: string) {
    const modal = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-modal' }]);
    const title = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-title' }]);
    const textTitle = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-text' }]);
    const text = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-text' }]);
    const img = CreateElement.createElement(Tag.img, [
      { name: 'class', value: 'achievement-img' },
      { name: 'alt', value: 'achievement-image' },
      { name: 'src', value: path },
    ]);
    const contentWrapper = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'achievement-content-wrapper' },
    ]);
    const textWrapper = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'achievement-text-wrapper' }]);

    title.textContent = GameState.lib.achievementTitle as string;
    textTitle.textContent = titleContent;
    text.textContent = textContent;

    textWrapper.append(textTitle, text);
    contentWrapper.append(img, textWrapper);
    modal.append(title, contentWrapper);

    let top = AchievementsValues.achievementStyleTop;
    for (let i = 0; i < Achievements.windowsCounter; i += 1) {
      top += AchievementsValues.achievementAnotherModal;
    }

    modal.style.top = `${top}px`;

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
      badgesDescription[AchievementsValues.hero][State.currentLang].title,
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
      badgesDescription[AchievementsValues.legend][State.currentLang].title,
      badgesDescription[AchievementsValues.legend][State.currentLang].text,
      './assets/images/badges/badge-11.svg'
    );
    Achievements.current.legend = true;
  }
}

export default Achievements;
