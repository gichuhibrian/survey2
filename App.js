import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from "./screens/home.screens";
import SurveyScreen from "./screens/survey.screens";
import CompletedScreen from "./screens/complete.screens";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<HomeScreen />*/}
      {/*  <SurveyScreen />*/}
        <CompletedScreen />
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
