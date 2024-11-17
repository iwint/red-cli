import { ThemeProps } from '@utils/theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
//@ts-ignore
  const theme : ThemeProps = useTheme();
  const styles = makeStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const makeStyles = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });