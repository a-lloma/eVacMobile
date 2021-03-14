import React from 'react';
import { view } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

export default function LoginPage() {
    const navigation = useNavigation();

    function handleNavigateToRegisterPage() {
        navigation.navigate('RegisterPage');
    }
    function handleLogar() {
        navigation.navigate('Home');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
            <StatusBar style="auto" />

            <RectButton style={styles.createRegisterButton} onPress={handleNavigateToRegisterPage}>
                    <Feather name="plus" size={20} color="#FFF" /> 
                    <Text>Criar conta</Text>
                </RectButton>
            <RectButton style={styles.createLogin} onPress={handleLogar}>
                    <Feather name="plus" size={20} color="#FFF" /> 
                    <Text>Logar</Text>
                </RectButton>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#444',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    title: {
      color: '#fff',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Raleway_700Bold',
    },

    createRegisterButton: {
        width: 156,
        height: 56,
        backgroundColor: '#ff669d',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createLogin: {
        width: 156,
        height: 56,
        backgroundColor: '#56CED4',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });