import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import ListScreen from './screens/ListScreen'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: { backgroundColor: 'blue' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' }
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Home'
                    }}
                />
                <Stack.Screen
                    name="List"
                    component={ListScreen}
                    options={{
                        title: 'Toilets',
                    }}
                />
                <Stack.Screen
                    name="Map"
                    component={MapScreen}
                    options={{
                        title: 'Map of Toilets',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
