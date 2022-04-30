import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import HMSMap, { HMSMarker, MapTypes } from '@hmscore/react-native-hms-map';
import { HMSApplication } from '@hmscore/react-native-hms-ml'

import { styles } from './components/Styles';

import TextRecognition from './components/TextRecognition';
import Translate from './components/Translate';
import ASR from './components/ASR';

const App = () => {
  // AGCApp.getInstance().setClientId('clientId');
  // AGCApp.getInstance().setClientSecret('clientSecret');
  // AGCApp.getInstance().setApiKey('apiKey');
  const isDarkMode = useColorScheme() === 'dark';


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  HMSApplication.setApiKey("DAEDAKFHYISPoNzV0or3CQDLrvH+d0KakjXFJv6fWEA+2OA1GFes7Ka2mXM2cNdg+VS/Lgo4p5Fugri4HzLxVgXv2NJyTOBlGShlKw==")
    .then((res) => {console.log(res);})
    .catch((err) => {console.log(err);})

  return (
    <View>
      {/* <Translate /> */}
      <ASR />
    </View>
  );
};

export default App;
