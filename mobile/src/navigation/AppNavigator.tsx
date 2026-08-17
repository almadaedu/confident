import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../features/auth/screens/LoginScreen';
import DiarioHomeScreen from '../features/diario/screens/DiarioHomeScreen';
import NovaEntradaScreen from '../features/diario/screens/NovaEntradaScreen';
import ConfigurarMascoteScreen from '../features/mascote/screens/ConfigurarMascoteScreen';

export type RootStackParamList = {
  Login: undefined;
  DiarioHome: undefined;
  NovaEntrada: undefined;
  ConfigurarMascote: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// TODO: por enquanto todas as telas estão acessíveis livremente.
// Quando a autenticação existir, envolver DiarioHome/NovaEntrada/ConfigurarMascote
// numa navegação condicionada ao usuário logado.
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Entrar' }} />
      <Stack.Screen name="DiarioHome" component={DiarioHomeScreen} options={{ title: 'Diário' }} />
      <Stack.Screen name="NovaEntrada" component={NovaEntradaScreen} options={{ title: 'Nova entrada' }} />
      <Stack.Screen name="ConfigurarMascote" component={ConfigurarMascoteScreen} options={{ title: 'Seu mascote' }} />
    </Stack.Navigator>
  );
}
