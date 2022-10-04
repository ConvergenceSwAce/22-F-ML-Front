import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from './components/MyButton';
import * as Speech from 'expo-speech';
import Lottie from 'lottie-react-native';

const App = () => {
  const alram =
    '핸드폰 화면의 가운데를 기준으로 위를 누르면 안내가 시작되고 아래를 누르면 종료됩니다.';
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
    />
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <LendingPage /> */}
      <MyButton name={'횡단보도 상황 안내'} />
      <MyButton name={'안내 종료'} />
      <StatusBar style="light" />
    </View>
  );
};

export default App;
