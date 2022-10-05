import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from './components/MyButton';
import * as Speech from 'expo-speech';
import Lottie from 'lottie-react-native';

const App = () => {
  const alram =
    '화면을 클릭하면 횡단보도 상황 안내를 시작하고 다시 누르시면 종료됩니다.';
  const [appIsReady, setAppIsReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppIsReady(false);
      Speech.speak(alram);
    }, 4500);
  }, []);

  return appIsReady ? (
    <Lottie
      source={require('./resource/animation/77592-confi-splash-screen.json')}
      autoPlay
      loop
      style={{
        backgroundColor: '#5156f6',
      }}
    />
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <LendingPage /> */}
      <MyButton />
      <StatusBar style="light" />
    </View>
  );
};

export default App;
