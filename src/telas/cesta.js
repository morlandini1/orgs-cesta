import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={topo} style={styles.topo} />
    <Text style={styles.titulo}>Detalhe da cesta</Text>

    <View>
        <Text style={styles.nome}>Cesta de Verduras</Text>
        <Text>Janny Jack Farm</Text>
        <Text>Uma cesta com produtos selecionados 
            cuidadosamente da fazenda para 
            sua cozinha</Text>
        <Text>R$ 40,00</Text>
            

    </View>
    </>
}

const styles = StyleSheet.create({
topo: {
    width: "100%",
    height: 578 / 768 * width,
},
titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 16,
    color: "white",
    fontWeight: "bold",
    padding: 16,
},
nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  }
});