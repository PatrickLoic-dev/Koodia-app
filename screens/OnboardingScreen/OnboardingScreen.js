import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Animated } from 'react-native';
import { Image } from 'expo-image';
import { useState, useEffect, useRef } from 'react';
import slides from './slides';
import OnBoardingItem from '../../components/UI/OnBoardingItem';



export default function OnBoardingScreen({ type, navigation }) {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged  = useRef(({ viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const slidesRef = useRef(null);

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;
   
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style = {styles.OnBoarding}>
                <View style = {{flexDirection: 'row', justifyContent :  "space-between", alignItems : "center", marginBottom : 95}}>
                    <Image source = {require("../../assets/KoodiaIcon.png")} style = {{height : 72, width : 72}}/>
                    <TouchableOpacity style = {{height: 32, width: 81, backgroundColor: '#FFF7DE', borderRadius : 12, borderWidth : 1, borderColor : '#D2CCF9', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}><Text style = {{fontSize : 12, marginRight : 8}}>Passer</Text><View style = {{backgroundColor: "rgba(254, 189, 2, 0.75)", height: 24, width: 24, borderRadius: 16, justifyContent: 'center', alignItems : 'center'}}><Image source = {require('../../assets/icons/arrow_right.svg')} style ={{height: 16, width: 16}}/></View></TouchableOpacity>
                </View>

                <View style = {{width: 360, height: 1000, backgroundColor:"#FFF", borderTopRightRadius : 48, borderTopLeftRadius : 48}}>
                    <FlatList data = {slides} 
                    renderItem={({item}) => <OnBoardingItem item = {item} scrollX ={scrollX}/> } 
                    horizontal
                     pagingEnabled 
                     bounces = {false}
                     keyExtractor = {(item)=> item.id}
                     onScroll = {Animated.event([{nativeEvent: {contentOffSet: {x : scrollX}}}], {
                        useNativeDriver : false
                     })}
                     scrollEventThrottle = {32}
                     onViewableitemsChanges = {viewableItemsChanged}
                     viewabilityConfig = {viewConfig}

                     style = {{ height : 370}}
                     />
                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02005E',
    },

    OnBoarding: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 33,
    
    }
});
