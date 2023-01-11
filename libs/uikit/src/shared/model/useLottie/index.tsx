import {
  CSSProperties,
  useCallback, useEffect, useRef, useState,
} from 'react';
import lottie, { AnimationConfigWithData, AnimationItem } from 'lottie-web';
import { IUseLottie } from './types';
import { DEFAULT_CONFIG, StyledView } from './shared';

const useLottie = (props: IUseLottie) => {

  const { animationData } = props;

  const [isReady, setIsReady] = useState(false);

  const animationContainerRef = useRef<HTMLDivElement>(null);
  const animationInstanceRef = useRef<AnimationItem>();

  const loadAnimation = useCallback(() => {
    if (!animationContainerRef.current) {
      return;
    }

    animationInstanceRef.current?.destroy();

    const config: AnimationConfigWithData = {
      ...DEFAULT_CONFIG,
      ...props,
      container: animationContainerRef.current,
    };

    animationInstanceRef.current = lottie.loadAnimation(config);

    setIsReady(!!animationInstanceRef.current);

    return () => {
      animationInstanceRef.current?.destroy();
      animationInstanceRef.current = undefined;
    };
  }, [animationContainerRef, animationInstanceRef, props]);

  const View = useCallback((props: { style?: CSSProperties; }) => (
    <StyledView
      ref={animationContainerRef}
      {...props}
    />
  ), [animationContainerRef]);

  useEffect(() => {
    const onUnmount = loadAnimation();

    // Clean up on unmount
    return () => onUnmount?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationData]);

  return {
    isReady,
    loadAnimation,
    View,
  };
};

export default useLottie;
