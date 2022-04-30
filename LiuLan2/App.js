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

import HMSMap, { HMSMarker, MapTypes } from '@hmscore/react-native-hms-map';

const App = () => {
  // AGCApp.getInstance().setClientId('clientId');
  // AGCApp.getInstance().setClientSecret('clientSecret');
  // AGCApp.getInstance().setApiKey('apiKey');
  const isDarkMode = useColorScheme() === 'dark';


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <>
      <HMSMap 
        mapType={MapTypes.NORMAL}
        style={{ height: 400 }}
        camera={{ target: { latitude: 41, longitude: 29 }, zoom: 11 }}
      >
        <HMSMarker // Simple example
          coordinate={{ latitude: 41, longitude: 29 }}
          title="Hello Huawei Map"
          snippet="This is a snippet!"
        />
      </HMSMap>
      
      <TouchableOpacity
        onPress={ () => start() }
      >
        <Text>
          Cagun l'ostia
        </Text>
      </TouchableOpacity>

    </>
  );
};

export default App;
