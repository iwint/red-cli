import { useTheme } from '@react-navigation/native';
import { ThemeProps } from '@utils/theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({}) => {
//@ts-ignore
  const theme : ThemeProps = useTheme();
  const styles = makeStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Button</Text>
    </SafeAreaView>
  );
};

export default Button;

const makeStyles = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });