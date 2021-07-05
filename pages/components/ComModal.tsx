import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Button } from "react-native";
import ComStyles from "../ComStyleSheet";

const ComModal = () => {
    const [resizeMode, setResizeMode] = useState("cover")
    const [visible, setVisible] = useState(false);
    const items = ["cover", "contain", "stretch", "repeat", "center"]
    return (
        <View style={ComStyles.container}>
            <TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                >
                    <View style={styles.pickerContent}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#f3f3f3', height: 50, alignItems: 'center', borderBottomWidth: 1 }}>
                            <Button
                                title="cancel"
                                onPress={() => {
                                    setVisible(false)
                                }} />
                            <Button
                                title="commit"
                                onPress={() => {
                                    setVisible(false)
                                }} />
                        </View>
                        <Picker
                            selectedValue={resizeMode}
                            onValueChange={(item, index) => {
                                setResizeMode(item)
                            }}
                        >
                            {
                                items.map((item) => <Picker.Item label={item} value={item} />)
                            }
                        </Picker>
                    </View>
                </Modal>
            </TouchableOpacity>
            <Button
                title="commit"
                onPress={() => {
                    setVisible(true)
                }} />
        </View>
    );
};

const styles = StyleSheet.create({
    pickerContent: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default ComModal;