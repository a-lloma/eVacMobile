import React from 'react';
import { view } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

export default function Home() {
    const navigation = useNavigation();

    function handleNavigateToVisits() {
        navigation.navigate('VisitedPlaces');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <StatusBar style="auto" />

            <RectButton style={styles.createVisitButton} onPress={handleNavigateToVisits}>
                <Feather name="plus" size={20} color="#FFF" />
                <Text>Consultar visitas</Text>
            </RectButton>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#56ced4',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Raleway_700Bold',
        fontSize: 24,
    },

    createVisitButton: {
        width: 156,
        height: 56,
        backgroundColor: '#ff669d',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});