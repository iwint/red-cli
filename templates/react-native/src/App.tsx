import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { EventProvider } from 'react-native-outside-press';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@api/query-client';
import { getTheme } from '@utils/theme';
import { useColorScheme } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { GOOGLE_CLIENT_ID, STRIPE_PUBLISHABLE_KEY } from '@constants/definitions';
import AppNavigator from './navigation';
import { ToastProvider } from 'react-native-toast-notifications';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

if (__DEV__) {
    require('./api/reactron');
}

const App = () => {
    const scheme = useColorScheme();

    GoogleSignin.configure({
        webClientId: GOOGLE_CLIENT_ID,
        offlineAccess: true,
    });

    return (
        <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
            <QueryClientProvider client={queryClient}>
                <PaperProvider theme={getTheme(scheme === 'dark') as any}>
                    <GestureHandlerRootView>
                        <EventProvider>
                            <ToastProvider>
                                <AppNavigator />
                            </ToastProvider>
                        </EventProvider>
                    </GestureHandlerRootView>
                </PaperProvider>
            </QueryClientProvider>
        </StripeProvider>
    );
};

export default App;
