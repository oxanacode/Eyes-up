import AvatarImage from '../../layout/blocks/modals/profile/avatar-image';
import ProfileState from '../profile/profile-state';

class ManageAvatar {
  public static changeAvatarImage(dataBlock: HTMLElement): void {
    if (dataBlock.firstElementChild && dataBlock.firstElementChild.firstElementChild) {
      const image = AvatarImage.createAvatarImage(
        'default-avatar profile-avatar-image selected-avatar',
        AvatarImage.createAvatarImagePath(ProfileState.avatar)
      );

      dataBlock.firstElementChild.removeChild(dataBlock.firstElementChild.firstElementChild);
      dataBlock.firstElementChild.append(image);
    }
  }

  public static changeSelectedAvatar(parent: HTMLElement, selected: HTMLElement): void {
    const btns = Array.from(parent.children);

    btns.forEach((btn: Element) => {
      if (btn.firstElementChild) {
        if (btn.firstElementChild.classList.contains('selected-avatar')) {
          btn.firstElementChild.classList.remove('selected-avatar');
          btn.firstElementChild.classList.add('not-selected-avatar');
        }
      }
    });

    if (selected.firstElementChild) {
      selected.firstElementChild.classList.remove('not-selected-avatar');
      selected.firstElementChild.classList.add('selected-avatar');
    }
  }
}

export default ManageAvatar;
