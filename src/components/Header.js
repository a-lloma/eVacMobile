import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';
// export default function Header(props) {
export default function Header({ title, showCancel = true }) {
    const navigation = useNavigation();

    function handleGoHomePage() {
        navigation.navigate('VisitedPlaces');
    }
    function handleGoToLogin() {
        navigation.navigate('LoginPage');
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" color="#15b6d6" size={24} />
            </BorderlessButton>

            <Text style={styles.titleMenu}> {title} </Text>

            { showCancel ? (
                <BorderlessButton onPress={handleGoToLogin}>
                    <Feather name="x" color="#ff669d" size={24} />
                </BorderlessButton>
            ) : (
                <BorderlessButton onPress={handleGoHomePage}>
                    <Feather name="x" color="#ff669d" size={24} />
                </BorderlessButton>
            )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    titleMenu: {
        fontFamily: 'Raleway_700Bold',
        color: '#8fa7b3',
        fontSize: 16,
    },
})