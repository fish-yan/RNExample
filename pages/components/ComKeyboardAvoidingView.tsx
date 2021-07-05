import React from "react";
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import ComStyles from "../ComStyleSheet";

const ComKeyboardAvoidingView = () => {
    return (
        <KeyboardAvoidingView
            style={ComStyles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={88}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={ {flex: 1, backgroundColor: "red"}}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Header</Text>
                    <TextInput style={styles.textInput} placeholder="UserName" />
                    <View style={styles.btnContainer}>
                        <Button color="white" title="submit" onPress={() => null} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        backgroundColor: "blue",
        marginTop: 42,
    }
})
export default ComKeyboardAvoidingView