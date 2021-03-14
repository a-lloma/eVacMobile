import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import pointMarker from '../images/point_map.png';
import { useNavigation } from '@react-navigation/native'

export default function VisitedPlaces() {
    const navigation = useNavigation();

    function handleNavigateToVisitedDetails() {
        navigation.navigate('VisitedDetails');
    }

    return (
        <View style={styles.container}>
            <MapView style={styles.map}

                provider={PROVIDER_GOOGLE}  // tanto android quando em dispositivos iOS vão usar o mapa da google    
                initialRegion={{
                    latitude: -23.5613462,
                    longitude: -46.6586759,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }} >
                <Marker
                    icon={pointMarker}
                    coordinate={{
                        latitude: -23.5613462,
                        longitude: -46.6586759,
                    }}
                >
                    <Callout tooltip={true} >
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>
                                Visita Realizada
                </Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>2 visitas realizadas</Text>

                <TouchableOpacity style={styles.createVisitButton} onPress={handleNavigateToVisitedDetails}>
                    <Feather name="plus" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>


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
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        justifyContent: 'center',
    },
    calloutText: {
        color: '#1A54AE',
        fontSize: 14,
        // fontFamily: 'Raleway_700Bold',
    },
    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,
        backgroundColor: '#FFF',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 3,
    },
    footerText: {
        color: '#1A54AE',
        // fontFamily: 'Raleway_700Bold',
    },
    createVisitButton: {
        width: 56,
        height: 56,
        backgroundColor: '#56CED4',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});