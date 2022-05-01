import { Dimensions, StyleSheet } from "react-native";

var bgColor = "#373737";
var fucsia = "#C94277";
var light_blue = "#C7FFC5";
var blue = "#55828B";
var buff = "#FCE694";
let ScreenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  body: {
    
  },
  content: {
    backgroundColor: bgColor,
    height: ScreenHeight,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 40,
  },
  btn: {
    width: 80,
    height: 80,
    backgroundColor: buff, 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
  }
})