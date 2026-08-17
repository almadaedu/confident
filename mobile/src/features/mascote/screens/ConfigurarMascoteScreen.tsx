import { View, Text, StyleSheet } from 'react-native';

// TODO: seleção de partes do mascote (cor, rosto, acessório) — ver docs/features/mascote.md
export default function ConfigurarMascoteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configurar mascote — em construção</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 16 },
});
