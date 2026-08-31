import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../features/auth/screens/LoginScreen';
import CalendarScreen from '../features/diario/screens/CalendarScreen';
import HomeScreen from '../features/diario/screens/HomeScreen';
import NewEntryScreen from '../features/diario/screens/NewEntryScreen';
import ConfigureMascotScreen from '../features/mascote/screens/ConfigureMascotScreen';
import { neutral } from '../theme/colors';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  NewEntry: undefined;
  ConfigureMascot: undefined;
  Calendar: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: neutral[3] },
        headerTintColor: neutral[12],
        headerTitleStyle: { fontFamily: 'PressStart2P_400Regular', fontSize: 12 },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Entrar' }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NewEntry" component={NewEntryScreen} options={{ title: 'Nova entrada' }} />
      <Stack.Screen name="ConfigureMascot" component={ConfigureMascotScreen} options={{ title: 'Seu mascote' }} />
      <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Calendário' }} />
    </Stack.Navigator>
  );
}
