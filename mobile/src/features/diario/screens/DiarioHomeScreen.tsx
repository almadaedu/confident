import { View, Text, StyleSheet } from 'react-native';

// TODO: mascote perguntando como foi o dia + calendário de entradas (ver docs/features/entrada-diario.md e calendario-streak.md)
export default function DiarioHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diário — em construção</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 16 },
});
