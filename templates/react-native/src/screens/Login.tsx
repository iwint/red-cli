import { MD3Theme } from 'react-native-paper';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthService } from '@services/useAuthService';
interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
    const theme = useTheme() as MD3Theme;
    const styles = makeStyles(theme);
    const { login, isLoginPending } = useAuthService();
    return (
        <SafeAreaView style={styles.container}>
            <Button
                disabled={isLoginPending}
                mode="contained"
                textColor={theme.colors.primary}
                style={styles.button}
                onPress={login}
            >
                Login with Google
            </Button>
        </SafeAreaView>
    );
};

export default Login;

const makeStyles = (theme: MD3Theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            backgroundColor: theme.colors.primary,
        },
        button: {
            width: '100%',
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.background,
            borderWidth: 1,
        },
    });
