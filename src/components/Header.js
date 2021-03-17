import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header({ title, showCancel = true }) {
  const navigation = useNavigation();

  function handleGoHomePage() {
    navigation.navigate('VisitedPlaces');
  }
  function handleGoToLogin() {
    navigation.navigate('LoginPage');
  }

  return (
    <>
      <LinearGradient
        colors={['#0094D4', '#00D4AA']}
        start={{ x: 0.0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      />
      <StatusBar backgroundColor="#72D6DA" />
      <View style={styles.container}>
        <BorderlessButton onPress={navigation.goBack}>
          <Feather name="arrow-left" color="#fff" size={24} />
        </BorderlessButton>

        <Text style={styles.titleMenu}>{title}</Text>

        <BorderlessButton
          onPress={showCancel ? handleGoToLogin : handleGoHomePage}
        >
          <Feather name="x" color="#ff669d" size={24} />
        </BorderlessButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 24,
    width: '100%',
    height: 108,
  },
  container: {
    marginTop: 24,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    height: 108,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleMenu: {
    fontFamily: 'Raleway_700Bold',
    color: '#fff',
    fontSize: 16,
  },
});
