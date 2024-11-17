import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Login from '@screens/Login';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};
