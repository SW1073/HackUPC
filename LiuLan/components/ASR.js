import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
//import Svg from 'react-native-svg';
import { HMSAsr } from '@hmscore/react-native-hms-ml'

import {styles} from './Styles';
import { TranslateText } from './Translate';

export default function ASR (params) {

  var [recognizedText, setRecognizedText] = useState("");

  HMSAsr.createAsrRecognizer()
    .then((res) => {console.log(res);})
    .catch((err) => {console.log(err);})

  var recognize = async () => {
    const res = await HMSAsr.startRecognizingPlugin(
      HMSAsr.LAN_EN_US,        // Language to be recognized.
      HMSAsr.FEATURE_WORD_FLUX // Recognition feature.
    )  

    params.func(res.result);

  }

  return (
    <View style={styles.centerContent}>
      <TouchableOpacity onPress={() => {recognize()}} style={styles.btn}>
        <Image source={require('../static/Logox4.png')} resizeMode='contain' style={styles.btn} />
      </TouchableOpacity>
    </View>
  );
}
