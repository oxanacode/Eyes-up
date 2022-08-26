import { Attribute } from '../../types/interfaces';
import { AttributesList } from '../../types/types';

class CreateInput {
  public static createInput(tag: string, attributes?: AttributesList): HTMLInputElement {
    const input = document.createElement(tag) as HTMLInputElement;

    if (attributes) {
      attributes.forEach((attribute: Attribute) => input.setAttribute(attribute.name, attribute.value));
    }

    return input;
  }
}

export default CreateInput;
