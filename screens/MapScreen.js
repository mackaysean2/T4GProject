import { View, Text, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'
import { Locations } from '../locations'
import ModalView from '../components/ModalView'

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

            <ModalView
                styles={styles.container}
                activeSelection={activeSelection}
                isModalVisible={isModalVisible}
                onPress={() => setIsModalVisible(false)}
            />
            
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
