import React, { useState } from "react"
import {
    Button,
    FlatList,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableHighlight,
    View,
    Dimensions,
    Alert,
    ScrollView,
    RefreshControl
} from "react-native"

const { width } = Dimensions.get("window")

const tempData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Item 1',
    },
    {
        id: '3a568afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Item 2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Item 3',
    },
    {
        id: '3a368afc-c605-48d3-a4f8-fbd91aa97f65',
        title: 'Item 4',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d78',
        title: 'Item 5',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e24d72',
        title: 'Item 6',
    },
    {
        id: '3ac18afc-c605-48d3-a4f8-fbd95aa97f65',
        title: 'Item 7',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145444129d78',
        title: 'Item 8',
    },
    {
        id: '3a068afc-c605-48d3-a4f8-fbd91aa97f65',
        title: 'Item 9',
    },
    {
        id: '58694a0f-3da1-471f-b096-145571e29d78',
        title: 'Item 10',
    },
    {
        id: '58692a0f-3da1-471f-bd96-145571e24d72',
        title: 'Item 11',
    },
    {
        id: '3ac640fc-c605-48d3-a4f8-fbd95aa97f65',
        title: 'Item 12',
    },
    {
        id: '58654a0f-3da1-471f-bd96-145444129d78',
        title: 'Item 13',
    },
];

var DATA = tempData

const Item = ({ title, onPress, backgroundColor, textColor, separators, column }: any) => {
    const colu = column ?? 1

    return (
        <TouchableHighlight
            style={[styles.item, backgroundColor, { width: width / colu }]}
            onPress={onPress}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
        >
            <Text style={[styles.title, textColor]}>{title}</Text>
        </TouchableHighlight>
    )
};

const ComFlatList = () => {
    const [isRefresh, setIsRefresh] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    const [hasSeparator, setHasSeparator] = useState(true)
    const [hasData, setHasData] = useState(true)
    const [hasHeader, setHasHeader] = useState(true)
    const [hasFooter, setHasFooter] = useState(true)
    const [isInverted, setIsInverted] = useState(false)
    const [isHorizontal, setIsHorizontal] = useState(false)
    const [column, setColumn] = useState(1)
    const [columnInput, setColumnInput] = useState("1")
    const [indexInput, setIndexInput] = useState("0")
    var input: TextInput | null
    var idxInput: TextInput | null
    var flatList: FlatList | null

    const renderItem = ({ item, separators }: any) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff"
        const color = item.id === selectedId ? "white" : "black"
        return (<Item
            title={item.title}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
            separators={separators}
            column={column}
            onPress={() => {
                setSelectedId(item.id)
            }}
        />)
    };

    const onRefresh = () => {
        setIsRefresh(true)
        setTimeout(() => {
            setIsRefresh(false)
        }, 3000);
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ height: 310 }}>
                <View style={styles.row}>
                    <Text>separator</Text>
                    <Switch
                        onValueChange={setHasSeparator}
                        value={hasSeparator}
                    />
                </View>
                <View style={styles.row}>
                    <Text>hasData</Text>
                    <Switch
                        onValueChange={(value) => {
                            setHasData(value)
                            DATA = value ? tempData : []
                        }}
                        value={hasData}
                    />
                </View>
                <View style={styles.row}>
                    <Text>hasHeader</Text>
                    <Switch
                        onValueChange={setHasHeader}
                        value={hasHeader}
                    />
                </View>
                <View style={styles.row}>
                    <Text>hasFooter</Text>
                    <Switch
                        onValueChange={setHasFooter}
                        value={hasFooter}
                    />
                </View>
                <View style={styles.row}>
                    <Text>inverted</Text>
                    <Switch
                        onValueChange={setIsInverted}
                        value={isInverted}
                    />
                </View>
                <View style={styles.row}>
                    <Text>horizontal</Text>
                    <Switch
                        onValueChange={setIsHorizontal}
                        value={isHorizontal}
                    />
                </View>
                {isHorizontal ? null : (<View style={styles.row}>
                    <Text>column</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput style={styles.input}
                            keyboardType="number-pad"
                            textAlign='center'
                            ref={(ref) => input = ref}
                            value={columnInput}
                            onChangeText={setColumnInput}
                        />
                        <Button
                            title="确定"
                            onPress={() => {
                                input?.blur()
                                setColumn(Number(columnInput))
                            }}
                        />
                    </View>
                </View>)}
                <View style={styles.row}>
                    <Text>scrollToIndex</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput style={styles.input}
                            keyboardType="number-pad"
                            textAlign='center'
                            ref={(ref) => idxInput = ref}
                            value={indexInput}
                            onChangeText={setIndexInput}
                        />
                        <Button
                            title="确定"
                            onPress={() => {
                                idxInput?.blur()
                                flatList?.scrollToIndex({
                                    animated: true,
                                    index: Number(indexInput)
                                })
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
            <FlatList
                ItemSeparatorComponent={!hasSeparator ? null : ({ highlighted }) =>
                    <View
                        style={[styles.separator, highlighted && { marginHorizontal: 120 }]}
                    >
                    </View>
                }
                ListEmptyComponent={() =>
                    <View style={[styles.some, { backgroundColor: '#dddddd' }]}>
                        <Text>EmptyView</Text>
                    </View>
                }
                ListHeaderComponent={!hasHeader ? null : () =>
                    <View style={[styles.some, { backgroundColor: '#00baff' }]}>
                        <Text>这是header</Text>
                    </View>
                }
                // ListHeaderComponent 存在才会生效
                ListHeaderComponentStyle={{ height: 120, justifyContent: 'center' }}
                ListFooterComponent={!hasFooter ? null : () =>
                    <View style={[styles.some, { backgroundColor: 'orange' }]}>
                        <Text>这是footer</Text>
                    </View>
                }
                // ListFooterComponent 存在才会生效
                ListFooterComponentStyle={{ height: 120, justifyContent: 'center' }}
                getItemLayout={(data, index) => {
                    return { length: 50, offset: 50 * index, index }
                }}
                onEndReached={({ distanceFromEnd }) => {
                    Alert.alert("提示", "到底了, 加载更多", [{ text: "确定", onPress: () => { } }])
                }}
                // onRefresh={onRefresh}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefresh}
                        onRefresh={onRefresh}
                    />
                }
                onEndReachedThreshold={-0.1}
                refreshing={isRefresh}
                numColumns={isHorizontal ? 1 : column}
                initialNumToRender={10} // default 10 数量需要超出一屏
                initialScrollIndex={0}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                // 刷新numColumns需要更新key
                key={column}
                inverted={isInverted}
                horizontal={isHorizontal}
                ref={(ref) => flatList = ref}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    item: {
        width: width,
        marginRight: 1,
        height: 44,
        backgroundColor: '#f9c2ff',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
    },
    separator: {
        backgroundColor: "#f3f3f3",
        height: 1
    },
    row: {
        paddingHorizontal: 10,
        backgroundColor: 'white',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1,
    },
    some: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 30,
        height: 30,
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
        paddingHorizontal: 5,
        textAlign: 'right',
        color: '#333333',
    }
});

export default ComFlatList