import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import InicioScreen from './screens/InicioScreen';
import CompromissosDiaScreen from './screens/CompromissosDiaScreen';
import CompromissosSemanaScreen from './screens/CompromissosSemanaScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Início" 
          component={InicioScreen} 
        />
        <Stack.Screen 
          name="Compromissos do dia"
          component={CompromissosDiaScreen}
        />
        <Stack.Screen 
          name="Compromissos da semana"
          component={CompromissosSemanaScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}