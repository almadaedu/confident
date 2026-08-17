import { View, Text, StyleSheet } from 'react-native';

// TODO: campo de texto livre + salvar (ver docs/features/entrada-diario.md)
export default function NovaEntradaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nova entrada — em construção</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 16 },
});
