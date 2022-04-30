import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import { HMSTranslate, HMSLanguageDetection } from '@hmscore/react-native-hms-ml';

export default function Translate () {

  var [textin, setTextin] = useState("");
  var sourceLC = '';
  var [translation, setTranslation] = useState("");

  var detectLanguage = (text) => {
    HMSLanguageDetection.probabilityDetect(
        true,
        true,
        HMSLanguageDetection.PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD,
        text
    ).then((res) => {
      sourceLC = res.result[0].languageCode;
    }
    ).catch((err) => {console.log(err);})
  }

  var trans = () => {
    detectLanguage(textin);
    HMSTranslate.syncTranslate(
        true,
        true,
        textin,
        {
            sourceLanguageCode: sourceLC,
            targetLanguageCode: HMSTranslate.ENGLISH
        }
    ).then((res) => {
      setTranslation(res.result);
    }).catch((err) => {console.log(err);})
  }

  return (
    <>
      <TextInput 
        placeholder='hola'
        onChangeText={(val) => {setTextin(val)}} />
      <Text>{translation}</Text>
      <TouchableOpacity onPress={() => {trans()}}>
        <Text>
          Translate
        </Text>
      </TouchableOpacity>
    </>
  );

}