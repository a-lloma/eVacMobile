import React from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import mapMarkerImg from '../images/point_map.png';
import { RectButton } from 'react-native-gesture-handler';

export default function VisitedDetails() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          <Image style={styles.image} source={{ uri: 'http://www.roteirorefresh.com.br/wp-content/uploads/2018/07/19780394_805527956284952_3059065952667664188_o.jpg' }} />
          <Image style={styles.image} source={{ uri: 'https://www.gazetadepinheiros.com.br/wp-content/uploads/2019/11/de-boa-na-banheira-olivio-bar-feltran-fotografia-005.jpg' }} />
          <Image style={styles.image} source={{ uri: 'http://www.roteirorefresh.com.br/wp-content/uploads/2018/07/1.jpg' }} />
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Olivio Bar </Text>
        
        <Text style={styles.description}>Restaurante parceiro que valida a segurança de seus consumidores. Possui um ranking de 95,8% de segurança em nosso sistema.</Text>
      
        <RectButton style={styles.contactButton} onPress={() => {}}>
          <FontAwesome name="shield" size={24} color="#FFF" />
          <Text style={styles.contactButtonText}>Registrar alerta de contaminação</Text>
        </RectButton>

        <View style={styles.mapContainer}>
          <MapView 
            initialRegion={{
              latitude: -23.553525,
              longitude: -46.69435,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.mapStyle}
          >
            <Marker 
              // icon={mapMarkerImg}
              coordinate={{ 
                latitude: -23.553525,
                longitude: -46.69435
              }}
            />
          </MapView>

          <View style={styles.routesContainer}>
            <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
          </View>
        </View>
      
        <View style={styles.separator} />

        <Text style={styles.title}>Detalhes da sua visita</Text>
        <Text style={styles.description}>###loren descrição#### dia, horário.</Text>

        <View style={styles.scheduleContainer}>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <Text style={[styles.scheduleText, styles.scheduleTextBlue]}>Data: 12/04/2021, chegada: 19h27 Saída: 21h00 </Text>
          </View>
          <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
            <Feather name="user-check" size={40} color="#39CC83" />
            <Text style={[styles.scheduleText, styles.scheduleTextGreen]}>Nenhuma contaminação foi registrada nessa data.</Text>
          </View>
        </View>


      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    height: 240,
  },

  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },

  detailsContainer: {
    padding: 24,
  },

  title: {
    color: '#4D6F80',
    fontSize: 30,
    fontFamily: 'Raleway_700Bold',
  },

  description: {
    fontFamily: 'Raleway_600SemiBold',
    color: '#5c8599',
    lineHeight: 24,
    marginTop: 16,
  },

  mapContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.2,
    borderColor: '#B3DAE2',
    marginTop: 40,
    backgroundColor: '#E6F7FB',
  },

  mapStyle: {
    width: '100%',
    height: 150,
  },

  routesContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  routesText: {
    fontFamily: 'Raleway_700Bold',
    color: '#0089a5'
  },

  separator: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#D3E2E6',
    marginVertical: 40,
  },

  scheduleContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  scheduleItem: {
    width: '48%',
    padding: 20,
  },

  scheduleItemBlue: {
    backgroundColor: '#E6F7FB',
    borderWidth: 1,
    borderColor: '#B3DAE2',
    borderRadius: 20,
  },

  scheduleItemGreen: {
    backgroundColor: '#EDFFF6',
    borderWidth: 1,
    borderColor: '#A1E9C5',
    borderRadius: 20,
  },

  scheduleText: {
    fontFamily: 'Raleway_600SemiBold',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },

  scheduleTextBlue: {
    color: '#5C8599'
  },

  scheduleTextGreen: {
    color: '#37C77F'
  },

  contactButton: {
    backgroundColor: '#ff669d',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 20,
  },

  contactButtonText: {
    fontFamily: 'Raleway_800ExtraBold',
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16,
  }
})