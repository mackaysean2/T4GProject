import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Marker, Callout } from 'react-native-maps'
import { StyleSheet, View, Text, Alert } from 'react-native'
import { Locations } from './locations'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
    const [current_view, setCurrentView] = useState('map')
    const Stack = createNativeStackNavigator();
    
    const initial_region = {
        latitude: 55.8628075,
        longitude: -4.2634654,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
    }

    const changeView = (location) => {
        setCurrentView(location.name)
    }

    const onMarkerPress = (location) => {
        Alert.alert(location.name)
        // changeView(location)
    }

    if (current_view == 'map') {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to the Test Map</Text>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    region={initial_region}
                    showsUserLocation
                >
                    {/* On Press function for marker pin*/}
                    {/* {Locations.map((location, index) => (
                        <Marker key={index} coordinate={location.coordinate} onPress={() => onMarkerPress(location)}>
                            <Callout>
                                <View style={{pading:5}}>
                                    <Text>{location.name}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))} */}
                    {/* Callout (part of library) */}
                    {Locations.map((location, index) => (
                        <Marker key={index} coordinate={location.coordinate}>
                            <Callout onPress={() => onMarkerPress(location)}>
                                <View style={{ pading: 5 }}>
                                    <Text>{location.name}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
            </View>
        )
    } else {
        <View style={styles.container}>
            <Text style={styles.title}>{current_view}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    },
    title: {
        fontSize: 20,
        color: 'black',
        marginBottom: 20
    },
    map: {
        width: '80%',
        height: '80%'
    }
})
