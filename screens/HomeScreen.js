import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
        <View styles={styles.container}>
            <Text styles={styles.title}>Home Screen</Text>
            <Button
                title="List Screen"
                onPress={() => navigation.navigate('List')}
            />
            <Button
                title="Map Screen"
                onPress={() => navigation.navigate('Map')}
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
