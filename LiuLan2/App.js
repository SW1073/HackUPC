import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  TouchableOpacity,
  View,
  PermissionsAndroid
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HMSMap, { HMSMarker, MapTypes } from '@hmscore/react-native-hms-map';
import { HMSApplication } from '@hmscore/react-native-hms-ml'

import { styles } from './components/Styles';

import TextRecognition from './components/TextRecognition';
import { ttsEngine, TTS } from './components/TTS';
import ASR from './components/ASR';
import { request } from './components/RequestParser';

const App = () => {
  var [req, setReq] = useState([]);

  HMSApplication.setApiKey("DAEDAKFHYISPoNzV0or3CQDLrvH+d0KakjXFJv6fWEA+2OA1GFes7Ka2mXM2cNdg+VS/Lgo4p5Fugri4HzLxVgXv2NJyTOBlGShlKw==")
    .then((res) => {console.log(res);})
    .catch((err) => {console.log(err);})

  ttsEngine();

  return (
    <View style={styles.fullcontent}>
      <Text style={styles.textLogo}>LIULAN</Text>
      <View style={styles.separator}><Text>-</Text></View>
      {/* <TouchableOpacity style={{backgroundColor: "#d7d7d7"}} onPress={async () => {
        var req = "give me a map, please"
        var str = await request(req);
        setReq([req, str]);
      }}>
        <Text>
          Request
        </Text>
      </TouchableOpacity>  */}
      <View style={styles.conversation}>
        {
          req != [] && 
          <>
            <Text style={styles.userText}>{req[0]}</Text>  
            {req[1]}
          </>
        }
        <View>

        </View>
      </View>
      <ASR />
    </View>
  );
};

export default App;
