import {ToastService} from './toastTypes';
import {useToastContext} from './useToastContext';

export const useToast = (): ToastService => {
  return useToastContext();
};
