import React, { useState, ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView  } from 'react-native';
import Clock from '@/components/Clock'; 

const App = () => {
  const [clocks, setClocks] = useState<ReactNode[]>([]);
  const addClock = () => {
    const newClocks: ReactNode[] = [...clocks, <Clock key={clocks.length} />];
    setClocks(newClocks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Stella Lin</Text>
      <Clock></Clock>
      <TouchableOpacity style={styles.addButton} onPress={addClock}>
        <Text style={styles.buttonText}>create clock</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {clocks.map((clock, index) => (
          <View key={index}>{clock}</View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
});

export default App;
