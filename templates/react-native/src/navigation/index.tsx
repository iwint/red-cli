import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getTheme } from '@utils/theme';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthStack } from './AuthStack';
import { MainStack } from './MainStack';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const scheme = useColorScheme();
    return (
        <NavigationContainer>
            <SafeAreaProvider style={{ flex: 1 }}>
                <StatusBar
                    animated
                    barStyle={
                        scheme === 'dark' ? 'light-content' : 'dark-content'
                    }
                    backgroundColor={
                        getTheme(scheme === 'dark').colors.others.background
                    }
                />
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="Auth" component={AuthStack} />
                    <Stack.Screen name="Main" component={MainStack} />
                </Stack.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
    );
};

export default AppNavigator;
