import {localPushNotification} from '../notifications/notification';

class LocalNotification {
    pushNotification(details) {
        localPushNotification({
            channelId: 'android-notification-channel',
            ...details,
        });
    }
}

export default new LocalNotification();
