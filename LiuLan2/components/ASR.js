import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
//import Svg from 'react-native-svg';
import { HMSAsr } from '@hmscore/react-native-hms-ml'

import {styles} from './Styles';
import { TranslateText } from './Translate';

export default function ASR () {

  var [recognizedText, setRecognizedText] = useState("");

  HMSAsr.createAsrRecognizer()
    .then((res) => {console.log(res);})
    .catch((err) => {console.log(err);})

  var recognize = () => {
    HMSAsr.startRecognizingPlugin(
      HMSAsr.LAN_EN_US,        // Language to be recognized.
      HMSAsr.FEATURE_WORD_FLUX // Recognition feature.
    ).then((res) => {
      setRecognizedText(res.result);
    }).catch((err) => {console.log(err);})
  }

  return (
    <View style={styles.centerContent}>
      <TouchableOpacity onPress={() => {recognize()}} style={styles.btn}>
        <Text>
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg> */}
          Record
        </Text>
      </TouchableOpacity>
    </View>
  );
}
