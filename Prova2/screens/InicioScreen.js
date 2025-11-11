import { View, Text, Button, StyleSheet } from 'react-native';

export default function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda</Text>
      <Text>Caio Taveira de Castro</Text>
      <Text>Ciências da Computação</Text>

      <View style={{ height: 20 }} />

      <Button
        title="COMPROMISSOS DO DIA"
        onPress={() => navigation.navigate('Compromissos do dia')}
      />

      <View style={{ height: 15 }} />

      <Button
        title="COMPROMISSOS DA SEMANA"
        onPress={() => navigation.navigate('Compromissos da semana')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  titulo: { 
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 15
  },
});