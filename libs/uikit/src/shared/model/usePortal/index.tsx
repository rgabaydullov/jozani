import {
  ReactNode, ReactPortal, useCallback, useEffect, useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { IPortalProps } from './types';
import { addRootElement, createRootElement } from './helpers';

const usePortal = (
  children: ReactNode,
  selector: IPortalProps['selector'],
  type = 'div',
) => {
  const ref = useRef<null | HTMLElement>(null);
  const element = useRef<null | ReactPortal>(null);

  const getRootElement = useCallback(() => {
    if (typeof window === 'undefined') {
      return null;
    }

    if (!!ref && !ref.current) {
      const existingElement = document.querySelector(selector) as HTMLElement;

      if (existingElement) {
        ref.current = existingElement;

        return ref.current as Element;
      }

      const newElement = createRootElement(selector, type);

      addRootElement(newElement);

      ref.current = newElement;
    }

    return ref.current as Element;
  }, [selector, type, ref]);

  useEffect(() => {
    const rootElement = getRootElement();

    if (!rootElement) {
      return;
    }

    element.current = createPortal(children, rootElement);

    return () => {
      ref?.current?.remove();
    };
  }, [ref, children, getRootElement]);

  return {
    ref,
    element: element.current,
  };
};

export default usePortal;
