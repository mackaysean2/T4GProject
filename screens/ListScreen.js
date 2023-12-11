import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native'

export default function ListScreen({ navigation }) {
    return (
        <View styles={styles.container}>
            <Text styles={styles.title}>List Screen</Text>

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
