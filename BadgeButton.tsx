import React from "react"
import {
    GestureResponderEvent,
    Image,
    ImageSourcePropType,
    StyleProp,
    Text,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native"

export interface BadgeButtonProps {
    styls?: StyleProp<ViewStyle>;
    source: ImageSourcePropType;
    onPress?: (event: GestureResponderEvent) => void;
    badge?: number | string;
    maxBadge?: number | string;
}

const BadgeButton = (props: BadgeButtonProps) => {

    const max = props.maxBadge ?? 99
    var badge = props.badge ?? 0
    if (badge > max) {
        badge = max + "+"
    }

    const width = 28
    return (
        <TouchableOpacity style={[props.styls]} onPress={props.onPress}>
            <View style={{ position: 'relative' }}>
                <Image style={{ width: width, height: width, marginTop: 0 }} source={props.source}></Image>
                {
                    <Text style={{
                        overflow: 'hidden',
                        position: 'absolute',
                        color: 'white',
                        backgroundColor: '#FF3B2D',
                        left: width - 14,
                        bottom: width - 12,
                        paddingHorizontal: 4,
                        height: 14,
                        borderRadius: 7,
                        fontSize: 10,
                        lineHeight: 14
                    }}>{props.badge}</Text> }
            </View>
        </TouchableOpacity>
    )
}

export default BadgeButton