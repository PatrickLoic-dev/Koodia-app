import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import slides from '../../screens/OnboardingScreen/slides';

export default onBoardingItem = ({item, scrollX }) =>{
    const {width} = useWindowDimensions();
    return(

     
        <View style = {{}}>
            <View style = {{flexDirection: 'column', alignItems: 'center', width: 360}}>
                                <Image source = {item.image} style= {{height: 260, width: 290, marginTop : 24}}></Image>
                                <Text style = {{fontSize : 24, fontWeight : 800, textAlign : 'center', marginHorizontal : 16}}>{item.title}</Text>
                                <Text style = {{fontSize : 14, textAlign : 'center', marginTop: 24, marginHorizontal : 32}}>{item.description}</Text>

                                <View style={{ flexDirection: 'row', marginTop: 114 }}>
                                {
                                slides.map((_, i) =>{
                                    const inputRange = [(i - 1) * width, i * width, (i + 1 ) * width];

                                    const dotWidth = scrollX.interpolate({
                                        inputRange,
                                        outputRange : [10, 20, 10],
                                        extrapolate :  'clamp',
                                    })

                                return <View style={{ width: dotWidth, height: 8, backgroundColor: '#7270A8', borderRadius: 8, marginRight: 12 }} key={i.toString()}/>;
                                })
                            }
                                </View>
                                
                                  
                                </View>
                            </View>
    )
}

const styles = StyleSheet.create({
    
});
