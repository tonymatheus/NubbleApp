export interface Toast {
  message: string;
  type?: 'success' | 'error';
  duration?: number;
  actions?: {
    title: string;
    onPress: () => void;
  };
}

export interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}
