import React from 'react';
import { Text, AsyncStorageStatic } from 'react-native';
import { HMSTranslate } from '@hmscore/react-native-hms-ml';
import HMSMap, { MapTypes, HMSMarker } from "@hmscore/react-native-hms-map";
import { ttsEngine, TTS } from './TTS';

import { ScheduleAlarm } from './Notifications';
import { TranslateText } from './Translate';
import { loadPartialConfig } from '@babel/core';
import { styles } from './Styles';

const locations = [
  {
  "latitude": 41.39182936024774,
  "longitude": 2.177578253798055,
  "title": "Bookstore Gigamesh",
  "snippet": "A special place for special people"
  },
  {
  "latitude": 41.40359768978355,
  "longitude": 2.1743531151409634,
  "title": "Sagrada Família",
  "snippet": "Hands down the best stop in al Barcelona"
  },
  {
  "latitude": 41.390437444969514,
  "longitude": 2.2020186441735223,
  "title": "Nova Icária Beach",
  "snippet": "Perfect spot for sun-bathing, swimming and playing volleyball"
  },
  {
  "latitude": 41.53875366902799,
  "longitude": 2.4460131383438406,
  "title": "My Home",
  "snippet": "there ain't no place like home"
  }
]

async function retrieveData () {
  try {
    console.log("retrieving")
    const value = await AsyncStorageStatic.getItem('hola');
    if (value) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
}

async function storeData (id, obj) {
  try {
    await AsyncStorageStatic.setItem(id, obj);
  } catch (error) {
    // Error saving data
  }
};

export async function request (text) {
  // ALARM
  if (text.includes("alarm")) {
    console.log("alarm for: " + text);
    let multiplier = 1;
    let seconds = 0;

    var stext = text.split(" ");
    if (stext.includes("seconds")) {
      var idx = stext.indexOf('seconds');
      // var numtxt = stext[idx-1];
      seconds = stext[idx-1];
      ScheduleAlarm(seconds);
      TTS("Setted alarm in " + stext[idx-1] + " seconds!");
      return <Text style={styles.liulanText}>Setted alarm in {stext[idx-1]} seconds!</Text>;
    } else if (stext.includes("minutes")) {
      var idx = stext.indexOf('minutes');
      // var numtxt = stext[idx-1];
      seconds = stext[idx-1] * 60;
      ScheduleAlarm(seconds);
      TTS("Setted alarm in " + stext[idx-1] + " minutes!");
      return <Text style={styles.liulanText}>Setted alarm in " + stext[idx-1] + " minutes!"</Text>;
    } else if (stext.includes("hours")) {
      var idx = stext.indexOf('hours');
      // var numtxt = stext[idx-1];
      seconds = stext[idx-1] * 360;
      ScheduleAlarm(seconds);
      TTS("Setted alarm in " + stext[idx-1] + " hours!");
      return <Text style={styles.liulanText}>"Setted alarm in " + stext[idx-1] + " hours!"</Text>;
    } 


    // MAP
  } else if (text.includes("map")) {
    console.log("show map for: " + text);

    const listItems = locations.map((loc, id) =>
      <HMSMarker 
        key={id}
        coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
        title={loc.title}
        snippet={loc.snippet}
      />
    );

    TTS("Here you have your map!");
    return (
      <>
        <Text style={styles.liulanText}>Here you have your map :d</Text>      
        <HMSMap 
          mapType={MapTypes.NORMAL}
          style={{ height: 400 }}
          camera={{ target: { latitude: 41.389011, longitude: 2.113343 }, zoom: 11 }}
        >
          {listItems}
        </HMSMap>
      </>
    )

    // TRANSLATE
  } else if (text.includes("translate")) {
    console.log("translating for: " + text);

    var str = "";
    var stext = text.split(" ");
    stext.splice("translate", 1);
    console.log(stext)

    var idx = stext.indexOf("to");
    var lang = 'en';
    if (idx > 0) {
      lang = stext[idx+1];
    }
    if (lang == "french") {
      lang = 'fr';
    } else if (lang == "spanish") {
      lang = 'es';
    } else if (lang == "catalan") {
      lang = 'ca';
    } else if (lang == "chinese") {
      lang = HMSTranslate.CHINESE;
    }

    var ttx = stext.slice(0, idx);
    console.log(ttx)

    var result = await TranslateText(ttx.join(" "), 'en', lang);
    console.log(result)
    TTS(result);
    return (
      <Text style={styles.liulanText}>{result}</Text>
    )
  }
}