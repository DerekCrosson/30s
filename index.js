import React from 'react'
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import AppNavigator from './navigation/AppNavigator'
import StoreContext from './state'

const App = () => (
  <StoreContext>
    <PaperProvider>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    </PaperProvider>
  </StoreContext>
);

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
