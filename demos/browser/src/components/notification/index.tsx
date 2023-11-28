import {useCallback, useEffect, useRef} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import moment from 'moment';
import {NotificationBannerContent, NotificationBannerSuccess, NotificationsWrapper,} from './style';
import {NotificationEntry, useNotification} from './state';

export default function Notification() {
  const {notifications, removeNotification} = useNotification();
  const timers = useRef<any[]>([]);
  const removeAfterTime = useCallback(
      (notification: NotificationEntry, index: number) => {
        const timer = setTimeout(() => {
          removeNotification(index);
          clearTimeout(timer);
        }, moment(notification.expiresAt).diff(moment(notification.createdAt), 'milliseconds'));
        timers.current.push(timer);
      },
      [removeNotification]
  );

  const removeNow = useCallback(
      (index: number) => {
        clearTimeout(timers.current[index]);
        removeNotification(index);
      },
      [timers, removeNotification]
  );

  useEffect(() => {
    notifications?.forEach(removeAfterTime);
  }, [notifications, removeAfterTime]);
  return (
      <NotificationsWrapper>
        <AnimatePresence>
          {notifications?.map(({message, ...notification}, index) => (
              <NotificationBannerSuccess
                  key={index}
                  $visible={true}
                  as={motion.div}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
              >
                <NotificationBannerContent>
                  <img src={`/icons/notification-${notification.state}.svg`} alt={notification.state}/>
                  <p>{message}</p>
                  <img
                      className="close"
                      onClick={() => removeNow(index)}
                      src="/icons/times-gray.svg"
                      alt="close"
                  />
                  {notification.ctas}
                </NotificationBannerContent>
              </NotificationBannerSuccess>
          ))}
        </AnimatePresence>
      </NotificationsWrapper>
  );
}
