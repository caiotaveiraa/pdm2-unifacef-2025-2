import { View, Text, StyleSheet } from 'react-native';

export default function ResumoScreen({ route }) {
  
  const { nome, email, telefone } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados cadastrados</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.valor}>{nome}</Text>

      <Text style={styles.label}>E-mail:</Text>
      <Text style={styles.valor}>{email}</Text>

      <Text style={styles.label}>Telefone:</Text>
      <Text style={styles.valor}>{telefone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  valor: { fontSize: 16 },
});
