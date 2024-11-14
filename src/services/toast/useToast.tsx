import {ToastService} from './toastTypes';
import {useToastServiceZustend, useToastZustend} from './useToastZustend';

export const useToast = (): ToastService => {
  const toast = useToastZustend();
  return toast;
};

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  return useToastServiceZustend();
}
