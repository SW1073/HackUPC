import { Dimensions, StyleSheet } from "react-native";

var bgColor = "#373737";
var fucsia = "#C94277";
var light_blue = "#C7FFC5";
var blue = "#55828B";
var buff = "#FCE694";
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  body: {
    
  },
  fullcontent: {
    height: ScreenHeight,
  },
  centerContent: {
    position: 'absolute',
    top: "80%",
    width: ScreenWidth,
    display: 'flex',
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    width: 80,
    height: 80,
    backgroundColor: blue, 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
  },
  userText: {

  },
  liulanText: {

  }
})