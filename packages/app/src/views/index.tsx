import React from 'react';
import {Text, View, Button, Alert} from 'react-native';
import LottieView from 'lottie-react-native';

const ViewScreen: React.FC = () => {
  return (
    <View>
      <Text>Olamundo </Text>
      <View style={{height: 120}}>
        <LottieView source={require('../../animation.json')} autoPlay loop />
      </View>

      <Text>Test de obfuscator </Text>
      <Button onPress={() => Alert.alert('Hello!')} title="Click Me" />
    </View>
  );
};

export default ViewScreen;
