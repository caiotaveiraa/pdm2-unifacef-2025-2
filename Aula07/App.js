import React, { useState, useCallback, useMemo } from 'react';
import { SectionList, Text, View, StyleSheet, TextInput } from 'react-native';

const produtos = [
  { nome: 'Notebook', preco: 3500, categoria: 'Eletrônicos' },
  { nome: 'Smartphone', preco: 2500, categoria: 'Eletrônicos' },
  { nome: 'TV', preco: 4000, categoria: 'Eletrônicos' },
  { nome: 'Camiseta', preco: 80, categoria: 'Roupas' },
  { nome: 'Calça', preco: 150, categoria: 'Roupas' },
  { nome: 'Jaqueta', preco: 300, categoria: 'Roupas' },
  { nome: 'Sofá', preco: 2000, categoria: 'Móveis' },
  { nome: 'Mesa', preco: 800, categoria: 'Móveis' },
];

export default function App() {
  const [filtro, setFiltro] = useState('');

  const produtosFiltrados = useMemo(() => {
    const filtrados = produtos.filter((p) =>
      p.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    const categorias = [...new Set(filtrados.map((p) => p.categoria))];

    return categorias.map((cat) => ({
      title: cat,
      data: filtrados.filter((p) => p.categoria === cat),
    }));
  }, [filtro]);

  const renderItem = useCallback(({ item }) => {
    return <ProdutoCard produto={item} />;
  }, []);

  const renderSectionHeader = useCallback(({ section }) => {
    return <Text style={styles.header}>{section.title}</Text>;
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Filtrar por nome..."
        value={filtro}
        onChangeText={setFiltro}
      />

      <SectionList
        sections={produtosFiltrados}
        keyExtractor={(item, index) => item.nome + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
}

const ProdutoCard = React.memo(({ produto }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  header: {
    fontSize: 22,
    backgroundColor: '#eee',
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 5,
  },
  card: {
    backgroundColor: '#f9f9f9',
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    width: '100%',
    alignSelf: 'center',
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  preco: {
    color: '#555',
    marginTop: 4,
  },
});