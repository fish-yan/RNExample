import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Switch,
    Text,
    View,
    TextInput,
    Button
} from "react-native";
import SegmentedControl from "@react-native-community/segmented-control";

const ComActivityIndicator = () => {
    const size: ('small' | 'large')[] = ['small', 'large']
    const [animating, setAnimating] = useState(true)
    const [hidesWhenStopped, setHidesWhenStopped] = useState(true)
    const [selectIndex, setSelectIndex] = useState(0)
    const [text, setText] = useState("")
    const [color, setColor] = useState("#00baff")

    return (
        <View style={[styles.container, styles.vertical]}>
            <View style={styles.row}>
                <Text>animating</Text>
                <Switch style={{ marginLeft: 10 }}
                    trackColor={{ false: "#f5dd4b", true: "#00baff" }}
                    onValueChange={setAnimating}
                    value={animating}
                />
            </View>
            <View style={styles.row}>
                <Text>hidesWhenStopped</Text>
                <Switch style={{ marginLeft: 10 }}
                    trackColor={{ false: "#f5dd4b", true: "#00baff" }}
                    onValueChange={setHidesWhenStopped}
                    value={hidesWhenStopped}
                />
            </View>
            <View style={styles.row}>
                <Text>size</Text>
                <SegmentedControl style={{ marginLeft: 10, width: 120 }}
                    values={size}
                    selectedIndex={selectIndex}
                    onChange={(event) => {
                        setSelectIndex(event.nativeEvent.selectedSegmentIndex)
                    }}
                />
            </View>
            <View style={styles.row}>
                <Text>color</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.input}
                        defaultValue='#00baff'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={setText}
                    />
                    <Button
                        color='#00baff'
                        title='确定'
                        onPress={() => {
                            setColor(text)
                        }}
                    />
                </View>
            </View>

            <ActivityIndicator style={styles.item} animating={animating} hidesWhenStopped={hidesWhenStopped} size={size[selectIndex]} color={color} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    vertical: {
        flexDirection: 'column',
    },
    row: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3'
    },
    item: {
        marginTop: 100
    },
    input: {
        width: 120,
        height: 30,
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
        paddingHorizontal: 5,
        textAlign: 'right',
        color: '#333333',
    }
})

export default ComActivityIndicator