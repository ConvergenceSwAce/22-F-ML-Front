import React from 'react';
import { View } from 'react-native';
import MyButton from './components/MyButton';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <MyButton name={'횡단보도 상황 안내'} />
      <MyButton name={'안내 종료'} />
    </View>
  );
};

export default App;
