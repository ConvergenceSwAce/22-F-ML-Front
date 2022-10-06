import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  Text,
  Dimensions,
  Vibration,
  StyleSheet,
} from 'react-native';
import * as Speech from 'expo-speech';
import axios from 'axios';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const flag = {
  isPause: true,
  loop: null,
};

const MyButton = () => {
  const HUNDRED_MS = 250;
  const PATTERN = [1 * HUNDRED_MS, 2 * HUNDRED_MS];
  const btnName = ['횡단보도 상황 안내', '안내 종료'];
  const [num, setNum] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    Speech.speak(text);
  }, [text]);

  const Resdata = () => {
    if (!flag.isPause) {
      axios
        .get('http://192.168.0.8:5001/api/notification')
        .then((res) => {
          setText(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      clearInterval(flag.loop);
    }
  };

  const start = () => {
    console.log(flag.isPause);
    setNum(1);
    Speech.stop();
    Speech.speak('안내를 시작합니다');
    flag.isPause = false;
    flag.loop = setInterval(function () {
      Resdata();
    }, 2000);
  };

  const stop = () => {
    console.log(flag.isPause);
    setNum(0);
    Speech.stop();
    Speech.speak('안내를 종료합니다');
    flag.isPause = true;
    clearInterval(flag.loop);
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        Speech.stop();
        Vibration.vibrate(PATTERN[0]);
        num === 0 ? start() : stop();
      }}
    >
      <Text style={styles.buttonName}>{btnName[num]}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5156f6',
    width: SCREEN_WIDTH,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonName: {
    fontSize: 38,
    color: 'white',
    fontWeight: '600',
  },
});
