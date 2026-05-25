import HomeScreen from "../HomeScreen"
import PerfilScreen from "../PerfilScreen"
import ConfigScreen from "../ConfigScreen"
import { createDrawerNavigator } from "@react-navigation/drawer"


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='Perfil' component={PerfilScreen} />
            <Drawer.Screen name='Config' component={ConfigScreen} />
        </Drawer.Navigator>
    )
}