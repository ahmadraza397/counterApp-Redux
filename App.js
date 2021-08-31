import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Counter from './src/screens/Counter';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

function App(props) {
   return (
     <Provider store={store}>
       <Counter />
     </Provider>
   );
}

const styles = StyleSheet.create({
  container: {

  }
});

export default App;