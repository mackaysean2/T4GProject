import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                title="List Screen"
                onPress={() => navigation.navigate('List')}
            />
            <Button
                style={styles.button}
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
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        color: 'black'
    }
})
