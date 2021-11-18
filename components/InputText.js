import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const InputText= () => {
    const [text, setText] = useState("");
    return (
      <View ><TextInput style={styles.input} onChangeText={setText} value={text} /></View>
    );
  };

  export default InputText;