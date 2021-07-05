import { Picker } from "@react-native-picker/picker";
import React, { useRef, useState } from "react";
import { Button, Image, ImageResizeMode, Modal, StyleSheet, Text, TouchableOpacity, View, TextInput, TouchableHighlight } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/AntDesign";
import ComStyles from "../ComStyleSheet";
const ComImage = () => {
    const [resizeMode, setResizeMode] = useState<ImageResizeMode>("cover")
    const [showPicker, setShowPicker] = useState(false)
    const [blurRadius, setBlurRadius] = useState(0)

    return (
        <View style={ComStyles.container}>
            <TouchableOpacity
                onPress={() => {
                    setShowPicker(!showPicker)
                }}
            >
                <View style={ComStyles.row}>
                    <Text>resizeMode</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text>{resizeMode}</Text>
                        <Ionicons style={{ marginLeft: 10 }} name="right" />
                    </View>
                </View>
            </TouchableOpacity>
            <View style={ComStyles.row}>
                <Text>accessible</Text>
                <TextInput
                    style={ComStyles.input}
                    value={String(blurRadius)}
                    keyboardType="number-pad"
                    onChangeText={(value) => setBlurRadius(Number(value))}
                />
            </View>
            <View style={styles.imageContent}>
                <Image
                    resizeMode={resizeMode}
                    blurRadius={blurRadius}
                    style={styles.image}
                    capInsets={{ top: 10, left: 10, right: 10, bottom: 10 }}
                    defaultSource={require("../../res/ic_share.png")}
                    loadingIndicatorSource={{ uri: require("../../res/ic_share.png") }}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    onError={() => console.log("onError")}
                    onLayout={() => console.log("onLayout")}
                    onLoad={() => console.log("onLoad")}
                    onLoadEnd={() => console.log("onLoadEnd")}
                    onLoadStart={() => console.log("onLoadStart")}
                    onPartialLoad={() => console.log("onPartialLoad")}
                    onProgress={({ nativeEvent }) => console.log("onProgress" + nativeEvent.loaded + "/" + "nativeEvent.total")}
                />
            </View>
            <Modal
                visible={showPicker}
                animationType="slide"
                transparent={true}
                style={{ backgroundColor: "red" }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={ComStyles.container}
                    onPress={() => setShowPicker(false)}

                >
                    <TouchableOpacity activeOpacity={1} style={styles.pickerContent} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#f3f3f3', height: 50, alignItems: 'center', borderBottomWidth: 1 }}>
                            <Button
                                title="cancel"
                                onPress={() => {
                                    setShowPicker(false)
                                }} />
                            <Button
                                title="commit"
                                onPress={() => {
                                    setShowPicker(false)
                                }} />
                        </View>
                        <Picker
                            selectedValue={resizeMode}
                            onValueChange={(item, index) => {
                                setResizeMode(item)
                            }}
                        >
                            <Picker.Item label="cover" value="cover" />
                            <Picker.Item label="contain" value="contain" />
                            <Picker.Item label="stretch" value="stretch" />
                            <Picker.Item label="repeat" value="repeat" />
                            <Picker.Item label="center" value="center" />
                        </Picker>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    imageContent: {
        alignItems: 'center'
    },
    image: {
        marginTop: 50,
        height: 100,
        width: 200,
    },
    pickerContent: {
        backgroundColor: "white",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
})

export default ComImage