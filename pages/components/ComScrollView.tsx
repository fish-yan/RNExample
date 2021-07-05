import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, RefreshControl } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ComScrollView = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                alwaysBounceVertical={false}
                alwaysBounceHorizontal={false}
                scrollEnabled={true}
                scrollEventThrottle={1}
                bounces={true}
                bouncesZoom={false}
                canCancelContentTouches={true}
                centerContent={false}
                pinchGestureEnabled={true}
                maximumZoomScale={5}
                minimumZoomScale={0.5}
                contentContainerStyle={{ padding: 30 }}
                contentInset={{ top: 100 }}
                contentInsetAdjustmentBehavior="automatic"
                contentOffset={{ x: 0, y: 200 }}
                decelerationRate="normal"
                directionalLockEnabled={true}
                disableIntervalMomentum={true}
                disableScrollViewPanResponder={true}
                horizontal={false}
                indicatorStyle="default"
                invertStickyHeaders={true}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="never"
                pagingEnabled={false}
                scrollIndicatorInsets={{top: 500}}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                scrollsToTop={true}
                scrollToOverflowEnabled={true}
                refreshControl={(<RefreshControl refreshing={true} onRefresh={() => {}}></RefreshControl>)}
                stickyHeaderIndices={[0]}
                onContentSizeChange={() => {
                    console.log("sizeChange");
                }}
                onMomentumScrollBegin={({nativeEvent}) => { 
                    console.log("begin scroll", nativeEvent);
                }}
                onMomentumScrollEnd={({nativeEvent}) => { 
                    console.log("end scroll", nativeEvent);
                }}
                onScrollBeginDrag={({nativeEvent, eventPhase}) => {
                    console.log("begin drag scroll", nativeEvent);
                }}
                onScrollEndDrag={({nativeEvent, eventPhase}) => {
                    console.log("end drag scroll", nativeEvent);
                }}
                onScroll={({ nativeEvent, eventPhase }) => {
                    console.log("on scroll", nativeEvent, eventPhase);
                }}
                
            >
                <TextInput style={{ height: 40, backgroundColor: "#f3f3f3" }} />
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginTop: 20
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});

export default ComScrollView;