
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/AntDesign";
import { Props } from "../App";
import Screens from "./Screens";

const data = Screens.map(item => item.name)

const Item = ({ navigation, text }: any) => {
  return (

    <View style={styles.item} >
      <Text style={{ color: "#333333" }}>{text}</Text>
      <Ionicons name='right'></Ionicons>
    </View>

  )
}

const HomeScreen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.dangerouslyGetParent().setOptions({ title: "Home" })
    const unsubscribe = navigation.addListener('tabPress', () => {
      navigation.dangerouslyGetParent().setOptions({ title: "Home" })
    })
    return unsubscribe
  }, [navigation])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.push(item)
            }}
          >
            <Item text={item}></Item>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    padding: 12,
    backgroundColor: 'white',
    borderBottomColor: '#F3F3F3',
    borderBottomWidth: 1,
  }
})

export default HomeScreen