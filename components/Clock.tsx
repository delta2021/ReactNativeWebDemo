import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const updateTime = () => {
    setCurrentTime(new Date());
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>{currentTime.toLocaleTimeString()}</Text>
        <TouchableOpacity style={styles.button} onPress={updateTime}>
          <Text style={styles.buttonText}>refresh</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginRight: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Clock;
