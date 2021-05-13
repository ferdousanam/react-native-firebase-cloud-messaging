/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import PushNotification from './src/components/PushNotification';

const App: () => Node = () => {
    return (
        <View style={styles.container}>
            <PushNotification />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
