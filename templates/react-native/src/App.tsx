import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { EventProvider } from 'react-native-outside-press';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@api/query-client';
import { getTheme } from '@utils/theme';
import { useColorScheme } from 'react-native';
import AppNavigator from './navigation';
import { ToastProvider } from 'react-native-toast-notifications';

if (__DEV__) {
    require('./api/reactron');
}

const App = () => {
    const scheme = useColorScheme();

    return (
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
    );
};

export default App;
