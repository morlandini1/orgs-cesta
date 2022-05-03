import React from "react";
import { Image, StyleSheet, Dimensions, Text } from "react-native";

import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={topo} style={styles.topo} />
    <Text></Text>
    </>
}

const styles = StyleSheet.create({
topo: {
    width: "100%",
    height: 578 / 768 * width,
}
});