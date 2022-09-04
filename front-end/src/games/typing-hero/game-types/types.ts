import { RenderHandler } from '../../../types/types';

export { RenderHandler };

type LvlCreate = (
  lvl: string,
  columns: number,
  speed: number,
  duration: number,
  menuCallback: () => void
) => HTMLElement;

export default LvlCreate;
