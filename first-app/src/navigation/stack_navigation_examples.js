import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator()
export default function StackNavigator() {
    return (
        <StackNavigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name="Detalhe" component={DetalheScreen} />
        </StackNavigator>
    )
}