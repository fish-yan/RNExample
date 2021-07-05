import React, { useEffect } from "react"
import { Button, Text, View } from "react-native"
import { Props } from "../App"


const OtherScreen = ({ navigation, route }: Props) => {

    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', () => {
          navigation.dangerouslyGetParent().setOptions({title: "Other"})
        })
        return unsubscribe
      }, [navigation])
      
    return (
        <View>
            <Text>Detail Screen </Text>
            <Button
                title={"go detail again"}
                onPress={() => {
                    navigation.push("Detail")
                }}
            />
            <Button
                title="back top"
                onPress={() => {
                    navigation.navigate('Home', { screen: 'Profile' })
                }}
            />
        </View>
    )
}

export default OtherScreen