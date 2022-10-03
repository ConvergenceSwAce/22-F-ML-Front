import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MyButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#071D49',
        width: '100%',
        flex: 1,
        marginTop: '0.5%',
        marginBottom: '0.5%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => alert('press!')}
    >
      <Text style={{ fontSize: 40, color: 'white' }}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
