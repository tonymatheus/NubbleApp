import React, {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {ToastPosition, useToast, useToastService} from '@services';

import {ToastContent} from './components/ToastContent';

const DEFAULT_DURATION = 3000;
export const Toast = () => {
  const {toast} = useToast();
  const position: ToastPosition = toast?.position || 'top';

  const {hideToast} = useToastService();

  const fadeIn = useRef(new Animated.Value(0)).current;

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeIn]);

  const runExitingAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeIn, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeIn],
  );

  useEffect(() => {
    if (toast) {
      runEnteringAnimation();
      setTimeout(() => {
        runExitingAnimation(hideToast);
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [toast, hideToast, runEnteringAnimation, runExitingAnimation]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      style={{
        position: 'absolute',
        alignSelf: 'center',
        opacity: fadeIn,
        [position]: 100,
      }}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
};
