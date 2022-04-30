import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import SurfaceView, { HMSApplication, HMSFrame, HMSLensEngine, HMSTextRecognition } from '@hmscore/react-native-hms-ml';

const TextRecognition = () => {

  HMSApplication.enableLogger()
    .then((res) => {console.log(res);})
    .catch((err) => {console.log(err);});
  

  return (
    <HMSFrame />
  )
  
}

export default TextRecognition;