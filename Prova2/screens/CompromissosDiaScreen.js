import { SectionList, Text, View, StyleSheet } from 'react-native';

const dados = [
  { title: '11/11 (ter)', data: ['08h00: Médico', '10h30: Reunião de planejamento', '15h00: Saída viagem'] },
];

export default function CompromissosDiaScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={dados}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => 
            <View style={styles.card}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        }
        renderSectionHeader={({ section }) => (
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{section.title}</Text>
                <Text>Caio Taveira de Castro</Text>
                <Text>Ciências da Computação</Text>
            </View>
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

  card: {
    backgroundColor: '#fff', 
    marginVertical: 5,
    padding: 15,
  },

  itemText: {
    fontSize: 16,
  },

  headerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },

  header: {
    fontSize: 25,
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
