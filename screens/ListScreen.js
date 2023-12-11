import { View, Text, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native'
import { FlatList } from 'react-native'
import { Locations } from '../locations'

export default function ListScreen({ navigation }) {

    function handlePress(name){
        Alert.alert(name)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={Locations}
                keyExtractor={(item, index) => item.name.toString()}
                ItemSeparatorComponent={<View style={{height:16}}/>}
                ListEmptyComponent={<Text>No Toilets found</Text>}
                ListHeaderComponent={<Text>List of Toilets</Text>}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card} >
                            <Text style={styles.listitem} onPress={() => handlePress(item.name)}>{item.name}</Text>
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
        backgroundColor: 'white',
    },
    card: {
        backgroundColor: 'lightgrey',
        padding: 10 
    },
    listitem: {
        fontSize: 20
    }
})
