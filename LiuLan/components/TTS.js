import { HMSTextToSpeech } from '@hmscore/react-native-hms-ml' 

export function ttsEngine () {
  HMSTextToSpeech.createEngine(
    {
      "volume": 1.0,
      "speed": 1.0,
      "language": HMSTextToSpeech.TTS_EN_US,
      "person": HMSTextToSpeech.TTS_SPEAKER_FEMALE_EN,
      "synthesizeMode": HMSTextToSpeech.TTS_ONLINE_MODE
    }
  ).then((res) => {console.log(res);}).catch((err) => {console.log(err);})  
}

export function TTS (text) {
  HMSTextToSpeech.speak(
    text,
    HMSTextToSpeech.QUEUE_FLUSH
  ).then((res) => {console.log(res);}).catch((err) => {console.log(err);})
}