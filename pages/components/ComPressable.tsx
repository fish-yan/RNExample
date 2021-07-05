import React, { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { Switch } from "react-native-gesture-handler";
import ComStyles from "../ComStyleSheet";

const ComPressable = () => {
    const [timesPressed, setTimesPressed] = useState(0);
    const [timesLongPressed, setTimesLongPressed] = useState(0)
    const [text, setText] = useState("2000")
    const [time, setTime] = useState(2000)
    const [hitText, setHitText] = useState("0")
    const [hitTime, setHitTime] = useState(0)
    const [disabled, setDisabled] = useState(false)
    var input: TextInput | null
    var hitInput: TextInput | null
    return (
        <View style={ComStyles.container}>
            <View style={ComStyles.row}>
                <Text>delayLongPress</Text>
                <View style={{ flexDirection: "row", alignItems: "center", width: 150, justifyContent: "space-around" }}>
                    <TextInput
                        style={ComStyles.input}
                        keyboardType="number-pad"
                        ref={(ref) => input = ref}
                        value={text}
                        onChangeText={setText} />
                    <Pressable
                        onPress={() => {
                            input?.blur()
                            setTime(Number(text))
                        }}
                    >
                        <Text>确定</Text>
                    </Pressable>
                </View>
            </View>
            <View style={ComStyles.row}>
                <Text>disabled</Text>
                <Switch value={disabled} onValueChange={setDisabled} />
            </View>
            <View style={ComStyles.row}>
                <Text>hitSlop</Text>
                <View style={{ flexDirection: "row", alignItems: "center", width: 150, justifyContent: "space-around" }}>
                    <TextInput
                        style={ComStyles.input}
                        keyboardType="number-pad"
                        ref={(ref) => hitInput = ref}
                        value={hitText}
                        onChangeText={setHitText} />
                    <Pressable
                        onPress={() => {
                            hitInput?.blur()
                            setHitTime(Number(hitText))
                        }}
                    >
                        <Text>确定</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.pressContainer}>
                <Pressable
                    disabled={disabled}
                    hitSlop={hitTime}
                    delayLongPress={time}
                    onPress={() => {
                        setTimesPressed((current) => current + 1);
                    }}
                    onPressIn={() => {
                        console.log("pressin");
                        
                    }}
                    onPressOut={() => {
                        console.log("pressout");
                    }}
                    onLongPress={() => {
                        setTimesLongPressed((current) => current + 1)
                    }}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? 'rgb(210, 230, 255)'
                                : 'white'
                        },
                        styles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={styles.text}>
                            {pressed ? 'Pressed!' : 'Press Me'}
                        </Text>
                    )}
                </Pressable>
            </View>
            <View style={styles.logBox}>
                <Text>{timesPressed} * onPress</Text>
            </View>
            <View style={styles.logBox}>
                <Text>{timesLongPressed} * onLongPress</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pressContainer: {
        justifyContent: "center",
        marginLeft: "25%",
        marginRight: "25%",
        marginTop: 30
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        height: 40,
        lineHeight: 40
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9'
    }
});
export default ComPressable