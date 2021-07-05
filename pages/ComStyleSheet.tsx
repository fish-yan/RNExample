import { StyleSheet } from "react-native";


const ComStyles = StyleSheet.create({
    container: {
        flex: 1,
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
    input: {
        width: 80,
        height: 30,
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
        paddingHorizontal: 5,
        textAlign: 'right',
        color: '#333333',
    }
})

export default ComStyles