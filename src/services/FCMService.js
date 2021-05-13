import messaging from '@react-native-firebase/messaging';
import {localPushNotification} from '../notifications/notification';

class FCMService {
    register = () => {
        //
    };

    requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    };

    getToken = () => {
        return new Promise((resolve, reject) => {
            messaging()
                .getToken()
                .then((fcmToken) => {
                    if (fcmToken) {
                        resolve(fcmToken);
                        console.log('Your Firebase Token is:', fcmToken);
                    } else {
                        reject('Failed', 'No token received');
                        console.log('Failed', 'No token received');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    };

    foregroundNotification() {
        return messaging().onMessage(async (remoteMessage) => {
            const icon = remoteMessage.notification.android.imageUrl;
            localPushNotification({
                title: remoteMessage.notification.title,
                message: remoteMessage.notification.body,
                largeIconUrl: icon,
                bigPictureUrl: icon,
                bigLargeIconUrl: icon,
            });
        });
    }
}

export default new FCMService();
