import create from 'zustand';
import moment from 'moment';
import {ReactElement} from 'react';

export interface NotificationEntry {
  message: string;
  state?: 'success' | 'error';
  ctas?: ReactElement | null,
  createdAt: Date;
  expiresAt: Date;
}

export interface NotificationState {
  notifications: NotificationEntry[] | null;
  pushNotification: (
      notification: Omit<NotificationEntry, 'createdAt' | 'expiresAt'>
  ) => typeof notification | void;
  removeNotification: (index: number) => typeof index | void;
}

export const useNotification = create<NotificationState>((set, get) => ({
  notifications: null,
  pushNotification(notification) {
    set((v) => ({
      notifications: v.notifications
          ? [
            ...v.notifications,
            {
              state: notification.state ?? 'success',
              message: notification.message,
              createdAt: moment().toDate(),
              ctas: notification.ctas ?? null,
              expiresAt: moment().add(5, 'seconds').toDate(),
            },
          ]
          : [
            {
              message: notification.message,
              state: notification.state ?? 'success',
              createdAt: moment().toDate(),
              ctas: notification.ctas ?? null,
              expiresAt: moment().add(5, 'seconds').toDate(),
            },
          ],
    }));
  },
  removeNotification(index) {
    set((v) => ({
      notifications: v.notifications?.filter((item, idx) => index !== idx),
    }));
  },
}));
