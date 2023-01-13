import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const App = () => {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'green' }}>Hello Reanimated!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
