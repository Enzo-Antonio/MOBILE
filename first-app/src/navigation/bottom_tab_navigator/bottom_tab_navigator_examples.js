import HomeScreen from '../HomeScreen';
import PerfilScreen from '../PerfilScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Perfil" component={PerfilScreen} />
        </Tab.Navigator>
    )
}