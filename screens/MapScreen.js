import { View, Text, StyleSheet, Button, Modal } from 'react-native'
import { useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Marker, Callout } from 'react-native-maps'
import { Locations } from '../locations'
export default function MapScreen({ navigation }) {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [activeSelection, setActiveSelection] = useState(Locations[0])

    const initial_region = {
        latitude: 55.8628075,
        longitude: -4.2634654,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
    }

    const onMarkerPress = (location) => {
        setActiveSelection(location)
        setIsModalVisible(true)
    }

    return (
        <View style={styles.container}>
            <Button
                title="Home Screen"
                onPress={() => navigation.navigate('Home')}
            />
                <Text style={styles.title}>Welcome to the Test Map</Text>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    region={initial_region}
                    showsUserLocation
                >
                    {/* On Press function for marker pin
                    {Locations.map((location, index) => (
                        <Marker
                            key={index}
                            coordinate={location.coordinate}
                            onPress={() => onMarkerPress(location)}
                        >
                            <Callout>
                                <View style={{ pading: 5 }}>
                                    <Text>{location.name}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))} */}
                    {/* Callout (part of library) */}
                    {Locations.map((location, index) => (
                        <Marker key={index} coordinate={location.coordinate}>
                            <Callout onPress={() => onMarkerPress(location)}>
                                <View>
                                    <Text>{location.name}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
                <Modal visible={isModalVisible}>
                <View style={styles.container}>
                    <Text>{activeSelection.name}</Text>
                    <Text>{activeSelection.description}</Text>
                    <Button
                        title="Close"
                        color="blue"
                        onPress={() => setIsModalVisible(false)}
                    />
                </View>
            </Modal>
            </View>
    )
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
