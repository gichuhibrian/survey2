import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from "./screens/home.screens";
import SurveyScreen from "./screens/survey.screens";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<HomeScreen />*/}
        <SurveyScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingHorizontal: 16,
  },
});
