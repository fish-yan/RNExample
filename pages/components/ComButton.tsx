import React, { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"


const ComButton = () => {
    const [count, setCount] = useState(0)

    return (
        <View style={styles.container}>
            <Text>已点击 {count} 次</Text>
            <View style={styles.buttonBg}>
                <Button
                    title="这是一个按钮"
                    color="white"
                    onPress={() => {
                        setCount(count+1)
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center'
    },
    buttonBg: {
        backgroundColor: "#00baff",
        borderRadius: 22,
        height: 44,
        width: 200,
        marginTop: 20,
        justifyContent: 'center'
    }
})

export default ComButton