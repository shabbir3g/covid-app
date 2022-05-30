import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Text from './src/components/text/text';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { typography } from './src/theme/typography';
import { presets } from './src/components/text/text.preset';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/home';

const Stack = createNativeStackNavigator();


export default function App() {


  const [loaded] = useFonts({
    'GraphikBold': require('./assets/fonts/GraphikBold.otf'),
    'GraphikMedium': require('./assets/fonts/GraphikMedium.otf'),
    'GraphikRegular': require('./assets/fonts/GraphikRegular.otf'),
  });

  if (!loaded) {
    return <Text>Font is loading....</Text>;
  }


  return (
    <>
    <NavigationContainer style={styles.container} theme={DarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style='light'></StatusBar>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
