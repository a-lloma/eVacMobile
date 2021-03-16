import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

const { Navigator, Screen } = createStackNavigator();

import VisitedPlaces from './pages/VisitedPlaces';
import VisitedDetails from './pages/VisitedDetails';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/login/RegisterPage';
import Home from './pages/Home';

import Header from './components/Header';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5'} }}>
                <Screen name="LoginPage" 
                    component={LoginPage}
                />
                <Screen name="Home" 
                    component={Home}
                />
                <Screen name="RegisterPage" 
                    component={RegisterPage}
                />
                <Screen name="VisitedPlaces" 
                    component={VisitedPlaces}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Lugares Visitados" showCancel={false} />
                    }}
                />
                <Screen name="VisitedDetails" 
                    component={VisitedDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Detalhes da visita" />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}