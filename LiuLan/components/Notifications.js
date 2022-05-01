import { HmsLocalNotification } from '@hmscore/react-native-hms-push'

export function ScheduleAlarm (seconds = 60) {
  setTimeout(ThrowNotification, seconds * 1000);
}

export function ThrowNotification () {
  HmsLocalNotification.localNotification({
    [HmsLocalNotification.Attr.title]: "Time's Up!!",
    [HmsLocalNotification.Attr.message]: "Alarm Time has ended!!", // (required)
    [HmsLocalNotification.Attr.title]: "Time's up!!",
    [HmsLocalNotification.Attr.bigText]: "I don't know what you were doing, but it's over :d",
    [HmsLocalNotification.Attr.subText]: "Alarm",
    [HmsLocalNotification.Attr.largeIcon]: "ic_launcher",
    [HmsLocalNotification.Attr.smallIcon]: "ic_notification",
    [HmsLocalNotification.Attr.importance]: HmsLocalNotification.Importance.max,
    [HmsLocalNotification.Attr.data]: { data: "data" },
    [HmsLocalNotification.Attr.playSound]: true,
    [HmsLocalNotification.Attr.soundName]: "./playsound.mp3",
    [HmsLocalNotification.Attr.vibrate]: true,
    [HmsLocalNotification.Attr.vibrateDuration]: 1000
  })
    .then((result) => {
      console.log("LocalNotification Default", result);
    })
    .catch((err) => {
      alert(
        "[LocalNotification Default] Error/Exception: " + JSON.stringify(err)
      );
    });
}