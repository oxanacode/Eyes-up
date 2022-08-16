import { AttributesList } from '../../types/types';
import { Attribute } from '../../types/interfaces';

class CreateElement {
  public static createElement(tag: string, attributes: AttributesList): HTMLElement {
    const element: HTMLElement = document.createElement(tag);

    if (attributes) {
      attributes
        .forEach((attribute: Attribute) => element
          .setAttribute(attribute.name, attribute.value));
    }

    return element;
  }
}

export default CreateElement;