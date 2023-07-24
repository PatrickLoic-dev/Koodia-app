import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterNumber from './screens/Register/RegisterScreen1';
import OTPRegisterScreen from './screens/Register/RegisterScreen2';
import ResidenceScreen from './screens/Register/RegisterScreen3';
import PersonnalInfoScreen from './screens/Register/RegisterScreen4';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import Overlay from './components/UI/overlay';

export default function App() {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="OTPRegister" component={OTPRegisterScreen} options={{headerShown: false}} />
          <RootStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="MyModal" component={Overlay} options={{headerShown: false}} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


