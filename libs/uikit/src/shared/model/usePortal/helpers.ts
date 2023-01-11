import { IPortalProps } from './types';

export const createRootElement = (
  selector: IPortalProps['selector'],
  type: string,
) => {
  const root = document.createElement(type);

  const pureSelector = selector.substring(1);

  switch (selector.substring(0, 1)) {
    case '#':
      root.setAttribute('id', pureSelector);
      break;
    case '.':
      root.setAttribute('className', pureSelector);
      break;
    default:
      break;
  }

  return root;
}

export const addRootElement = (root: HTMLElement) => {
  document.body.insertBefore(
    root,
    document.body.lastElementChild && document.body.lastElementChild.nextElementSibling,
  );
}
