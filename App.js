import React, { useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import MyButton from './components/MyButton';
import * as Speech from 'expo-speech';

const App = () => {
  const alram = "핸드폰 화면의 가운데를 기준으로 위를 누르면 안내가 시작되고 아래를 누르면 종료됩니다.";
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    Speech.speak(alram)
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onLayout={onLayoutRootView}
    >
      {/* <LendingPage /> */}
      <MyButton name={'횡단보도 상황 안내'} />
      <MyButton name={'안내 종료'} />
      <StatusBar style="light" />
    </View>
  );
};

export default App;
