import CreateElement from '../../../elements/create-element';
import MainTitle from '../../../elements/main-title';
import RegistrationSwitchBtn from './registration-switch-btn';
import RegistrationDataWrapper from './registration-data-wrapper';

import { Tag } from '../../../../types/enums';
import { ActionHandler, RenderHandler } from '../../../../types/types';

class RegistrationModalContent {
  public static createRegistrationModalContent(
    className: string,
    titleName: string,
    switchBtnText: string,
    switchBtnAction: string,
    actionBtn: ActionHandler,
    render: RenderHandler
  ): HTMLElement {
    const content = CreateElement.createElement(Tag.div, [{ name: 'class', value: className }]);
    const title = MainTitle.createMainTitle(titleName);
    const dataWrapper = RegistrationDataWrapper.createRegistrationDataWrapper(actionBtn, render);
    const switchBtn = RegistrationSwitchBtn.createRegistrationSwitchBtn(switchBtnText, switchBtnAction, content);

    content.append(title, dataWrapper, switchBtn);

    return content;
  }
}

export default RegistrationModalContent;
