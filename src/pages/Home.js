import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

export default function Home() {
  const navigation = useNavigation();

  function handleNavigateToVisits() {
    navigation.navigate('VisitedPlaces');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <Image style={styles.logo} source={require('../images/logo.png')} />
        <View>
          <Text style={styles.dateText}>30/06/2021</Text>
          <Text style={styles.descText}>Data da sua próxima vacinação</Text>
        </View>
      </View>
      <RectButton
        style={styles.button}
        borderless={true}
        onPress={handleNavigateToVisits}
      >
        <View style={styles.buttonBorder}>
          <AntDesign name="idcard" size={40} color="#1A54AE" />
          <Text style={styles.buttonText}>Escanear uma nova Carteirinha</Text>
        </View>
      </RectButton>
      <RectButton
        style={styles.button}
        borderless={true}
        onPress={handleNavigateToVisits}
      >
        <View style={styles.buttonBorder}>
          <FontAwesome5 name="notes-medical" size={40} color="#1A54AE" />
          <Text style={styles.buttonText}>Avisar contaminação de COVID</Text>
        </View>
      </RectButton>
      <RectButton
        style={styles.button}
        borderless={true}
        onPress={handleNavigateToVisits}
      >
        <View style={styles.buttonBorder}>
          <FontAwesome name="heartbeat" size={40} color="#1A54AE" />
          <Text style={styles.buttonText}>Consultar vacinas cadastradas</Text>
        </View>
      </RectButton>
      <RectButton
        style={styles.button}
        borderless={true}
        onPress={handleNavigateToVisits}
      >
        <View style={styles.buttonBorder}>
          <FontAwesome name="bar-chart" size={40} color="#1A54AE" />
          <Text style={styles.buttonText}>Consultar Lugares frequentados</Text>
        </View>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 130,
    marginRight: 10,
  },
  dateText: {
    fontSize: 30,
    color: '#1A54AE',
  },
  descText: {
    fontSize: 15,
    color: '#1A54AE',
  },
  createVisitButton: {
    width: 156,
    height: 56,
    backgroundColor: '#ff669d',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 280,
    height: 80,
    borderRadius: 6,
    margin: 12,
  },
  buttonBorder: {
    width: '100%',
    height: '100%',
    borderColor: '#1A54AE',
    borderWidth: 2,
    borderRadius: 6,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#1A54AE',
    marginLeft: 10,
  },
});
