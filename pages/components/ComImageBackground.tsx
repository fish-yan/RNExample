import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import ComStyles from "../ComStyleSheet";

const ComImageBackground = () => {
    return (
        <View style={[ComStyles.container]}>
            <ImageBackground resizeMode="cover" style={styles.image} source={{uri:"https://reactjs.org/logo-og.png"}} >
                <Text style={styles.text}>Inside</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        backgroundColor: "#000000a0",
        fontSize: 40,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        lineHeight: 80
    }
})

export default ComImageBackground