import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./bottom_tab_navigator/bottom_tab_navigator_examples";
import DetalheScreen from "./DetalheScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Detalhe" component={DetalheScreen} />
        </Stack.Navigator>
    )
}