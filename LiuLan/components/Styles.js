import { Dimensions, StyleSheet } from "react-native";

var bgColor = "#202020";
var fucsia = "#C94277";
var light_blue = "#C7FFC5";
var blue = "#53A1B1";
var buff = "#FCE694";
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  body: {
    
  },
  fullcontent: {
    height: ScreenHeight,
    backgroundColor: bgColor
  },
  centerContent: {
    position: 'absolute',
    top: "82%",
    width: ScreenWidth,
    display: 'flex',
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    width: 80,
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  conversation: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  userText: {
    marginLeft: 'auto',
    textAlign: "right",
    fontSize: 18,
    fontStyle: 'italic',
    maxWidth: 260,
    color: "#FFFFFF",
    opacity: 0.7
  },
  liulanText: {
    marginRight: 'auto',
    textAlign: "left",
    fontSize: 18,
    color: "#FFFFFF",
    maxWidth: 260,
    opacity: 0.8,
    marginBottom: 20,
  },
  textLogo: {
    paddingTop: 10,
    fontSize: 38,
    textAlign: 'center',
    color: "#FFFFFF"
  },
  separator: {
    maxHeight: 4,
    backgroundColor: blue,
    width: ScreenWidth,
  }
})