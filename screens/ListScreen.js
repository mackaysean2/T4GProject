import { View, Text, StyleSheet, Alert, FlatList, Button } from 'react-native'
import { useState } from 'react'
import { Locations } from '../locations'
import { Modal } from 'react-native'

export default function ListScreen({ navigation }) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [activeSelection, setActiveSelection] = useState(Locations[0])

    function handlePress(item) {
        setActiveSelection(item)
        setIsModalVisible(true)
    }

    return (
        <View style={styles.container}>
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
            <FlatList
                data={Locations}
                keyExtractor={(item) => item.name.toString()}
                ItemSeparatorComponent={<View style={{ height: 16 }} />}
                ListEmptyComponent={<Text>No Toilets found</Text>}
                ListHeaderComponent={<Text>List of Toilets</Text>}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <Text
                                style={styles.listitem}
                                onPress={() => handlePress(item)}
                            >
                                {item.name}
                            </Text>
                        </View>
                    )
                }}
            />
            <Button
                title="Home Screen"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    card: {
        backgroundColor: 'lightgrey',
        padding: 10
    },
    listitem: {
        fontSize: 20
    }
})
