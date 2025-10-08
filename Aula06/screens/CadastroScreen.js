import { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  const [erros, setErros] = useState({});

  const validar = () => {
    const novosErros = {};

    if (!nome.trim()) novosErros.nome = 'Digite seu nome completo';

    if (!email.includes('@')) novosErros.email = 'Digite um e-mail válido';

    if (senha.length < 6) novosErros.senha = 'A senha deve ter no mínimo 6 caracteres';

    if (senha !== confirmarSenha) novosErros.confirmarSenha = 'As senhas não coincidem';

    if (!telefone.trim()) novosErros.telefone = 'Digite o telefone';

    setErros(novosErros);

    return Object.keys(novosErros).length === 0;
  };

  const handleCadastro = () => {
    if (validar()) {
      navigation.navigate('Resumo', {
        nome,
        email,
        telefone,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {erros.email && <Text style={styles.erro}>{erros.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />
      {erros.confirmarSenha && <Text style={styles.erro}>{erros.confirmarSenha}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="numeric"
        value={telefone}
        onChangeText={setTelefone}
      />
      {erros.telefone && <Text style={styles.erro}>{erros.telefone}</Text>}

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  erro: {
    color: 'red',
    marginBottom: 10,
  },
});
