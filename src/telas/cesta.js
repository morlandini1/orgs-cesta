import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={topo} style={styles.topo} />
    <Text style={styles.titulo}>Detalhe da cesta</Text>

    <View style={styles.cesta}>
        <Text style={styles.nome}>Cesta de Verduras</Text>
        <Text style={styles.nomeFazenda}>Janny Jack Farm</Text>
        <Image source={logo} />
        <Text style={styles.descricao}>
            Uma cesta com produtos selecionados 
            cuidadosamente da fazenda para 
            sua cozinha</Text>
        <Text style={styles.preco}>R$ 40,00</Text>
            

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
cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
},
nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
},
descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
},
preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
}  
});