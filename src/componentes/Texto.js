import react from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) {
   let style = styles.texto;

if (style?.fontweight === 'bold') {
    style = styles.textoNegrito;
}
  return <Text style={[style, styles.texto]}>{ children }</Text>

}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
    },
    textoNegrito: {
        fontFamily: "MontserratBold"
    }
})