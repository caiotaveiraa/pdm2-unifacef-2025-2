import { SectionList, Text, View, StyleSheet } from 'react-native';

const dados = [
  { title: 'Segunda-feira (10/11)', data: ['09h30: Dentista', '16h00: Pilates'] },
  { title: 'Terça-feira (11/11)', data: ['08h00: Médico', '10h30: Reunião de planejamento', '15h00: Saída viagem'] },
  { title: 'Quarta-feira (12/11)', data: ['09h00: Congresso', '12h30: Almoço com executivos', '20h30: Jantar de confraternização'] },
];

export default function CompromissosSemanaScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Caio Taveira de Castro</Text>
        <Text>Ciências da Computação</Text>
      </View>

      <SectionList
        sections={dados}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => 
            <View style={styles.card}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        }
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },

  headerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },

  header: {
    fontSize: 20,
    backgroundColor: '#eee',
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  itemText: {
    fontSize: 16,
  },

  card: {
    backgroundColor: '#fff', 
    marginVertical: 5,
    padding: 15,
  },
});
