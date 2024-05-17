import {useContext} from 'react';

import {ToastContext} from './Providers/ToastProvider';
import {ToastService} from './toastTypes';

export const useToastContext = (): ToastService => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('Toast Must be used whithin a ToastProvider');
  }

  return context;
};
