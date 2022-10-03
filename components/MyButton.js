import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  Text,
  Dimensions,
  Vibration,
  StyleSheet,
} from 'react-native';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const MyButton = (props) => {
  // 음성 출력
  // const [sound, setSound] = useState();

  // 음성을 틀어주는 비동기 함수 (백앤드에서 txt 받아오기러함)
  // async function playSound() {
  //   console.log('Loading Sound');
  //   const { sound } = await Audio.Sound.createAsync(
  //     props.name === '횡단보도 상황 안내'
  //       ? require('../assets/sample.mp3')
  //       : require('../assets/end.mp3')
  //   );
  //   setSound(sound);

  //   console.log('test Sound');
  //   await sound.playAsync();
  // }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         // 메모리 낭비 줄이기
  //         console.log('Unloading Sound');
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  // 헵틱 반응 시간
  const HUNDRED_MS = 250;
  const PATTERN = [1 * HUNDRED_MS, 2 * HUNDRED_MS];


  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        if (props.name === '횡단보도 상황 안내') {
          // playSound();
          Speech.speak("test")
        } else {
          Speech.stop();
          Speech.speak("안녕하세요")
          // playSound();
        }
        Vibration.vibrate(PATTERN[0]);
      }}
    >
      <Text style={styles.buttonName}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#071D49',
    width: SCREEN_WIDTH,
    flex: 1,
    marginTop: '0.5%',
    marginBottom: '0.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonName: {
    fontSize: 38,
    color: 'white',
    fontWeight: '600',
  },
});
