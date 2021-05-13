import React, {Component} from 'react';
import {Button, StyleSheet, ToastAndroid, View} from 'react-native';
import LocalNotification from '../services/LocalNotification';
import FCMService from '../services/FCMService';

class PushNotification extends Component {
    componentDidMount() {
        new FCMService().foregroundNotification();
    }

    popNotification() {
        new LocalNotification().pushNotification({
            title: 'Local Notification',
            message: 'Local Notification Button Is Pressed',
        });
    }

    getFCMToken() {
        new FCMService().getToken(() => {
            ToastAndroid.showWithGravityAndOffset('See Token On Console', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Local Notification" onPress={this.popNotification} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="FCM Token" onPress={this.getFCMToken} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '40%',
        margin: 10,
    },
    button: {
        width: '100%',
    },
});

export default PushNotification;
