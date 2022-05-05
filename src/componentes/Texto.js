import react from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) {
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