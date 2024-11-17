import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import Home from '@screens/Home';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Login"
        component={Home}
      />
    </Stack.Navigator>
  );
};
