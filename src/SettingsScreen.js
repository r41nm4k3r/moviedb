// src/SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Switch, Image } from 'react-native';
import { List } from 'react-native-paper';

export default function SettingsScreen() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <List.Item
        title="Enable Notifications"
        right={() => <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />}
      />
      {/* Add more settings options here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
