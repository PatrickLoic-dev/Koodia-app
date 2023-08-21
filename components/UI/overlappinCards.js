import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, PanResponder } from 'react-native';
import { Image } from 'expo-image';

const OverlappingCardsAnimation = ({ navigation }) => {
  const colors = ['#FFF', '#FFF', '#FFF'];


  this.state = {
    cardsPan: new Animated.ValueXY(),
    cardsStackedAnim: new Animated.Value(0), // add this statement
    currentIndex: 0, // and this to track card positions
  }



  this.cardsPanResponder = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (event, gestureState) => {
      this.state
        .cardsPan
        .setValue(
          { x: gestureState.dx, y: this.state.cardsPan.y }
        );
    },
    onPanResponderTerminationRequest: () => false,
    onPanResponderRelease: (event, gestureState) => {
      Animated.timing(this.state.cardsPan, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      // will be used to interpolate values in each view
      Animated.timing(this.state.cardsStackedAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        // reset cardsStackedAnim's value to 0 when animation ends
        this.state.cardsStackedAnim.setValue(0);

        // increment card position when animation ends
        this.setState({
          currentIndex: this.state.currentIndex + 1,
          useNativeDriver: false,
        });
      });
    },
  })).current;



  return (
    <View>
      <Animated.View    // last card
        style={{
          width: 315, height: 410,
          position: 'absolute',
          zIndex: 1,
          bottom: 40,
          top: -5,
          left: 8,
          alignItems: 'center',
          borderRadius: 32,
          backgroundColor: colors[(this.state.currentIndex + 2) % 3],
          zIndex: 1,
          backgroundColor: colors[2],
          opacity: 0.3,
          transform: [{ scale: 0.80 }],
        }} >

      </Animated.View>




      <Animated.View    // second card
        style={{
          width: 315, height: 410,
          position: 'absolute',
          zIndex: 2,
          bottom: 20,
          top: 25,
          left: 8,
          alignItems: 'center',
          borderRadius: 32,
          backgroundColor: colors[(this.state.currentIndex + 1) % 3],
          zIndex: 2,
          backgroundColor: colors[1],
          opacity: 0.6,
          transform: [{ scale: 0.90 }],
        }}>

      </Animated.View>


      <Animated.View  // frontmost card
       
        style={{
          width: 315,
          height: 420,
          position: 'absolute',
          zIndex: 3,
          bottom: 0,
          padding: 24,
          top: 60,
          left: 8,
          borderRadius: 32,
          backgroundColor: colors[0], // Blue
          opacity: 1,
          transform: [{ scale: 1.0 }],
        }} >
        <View style={{ height: 32, width: 32, backgroundColor: '#FE5300', borderRadius: 16, padding: 8 }}>
          <Image source={require('../../assets/icons/Widget_light.svg')} style={{ height: 16, width: 16 }} />
        </View>

        <Text style={{ fontSize: 24, fontWeight: 700, marginTop: 8 }}>Actions Rapides</Text>

        <TouchableOpacity style={{ height: 140, width: 270, backgroundColor: 'rgba(254, 83, 0, 0.12)', marginTop: 12, borderRadius: 24, padding: 12 }} onPress={() => navigation.navigate('ProductsScreen')}>
          <View style={{ height: 40, width: 32, backgroundColor: '#FE5300', borderRadius: 16, paddingHorizontal: 8, paddingVertical: 12 }}>
            <Image source={require('../../assets/icons/Buy.svg')} style={{ height: 16, width: 16 }} />
          </View>
          <Text style={{ fontSize: 14, marginTop: 24, fontWeight: 600, color: '#FE5300' }}>Effectuer une course</Text>
          <Text style={{ fontSize: 12, marginTop: 12, color: '#FE5300' }}>Faites vous livrer votre course à domicile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ height: 140, width: 270, backgroundColor: 'rgba(254, 83, 0, 0.12)', marginTop: 12, borderRadius: 24, padding: 12 }}>
          <View style={{ height: 40, width: 32, backgroundColor: '#FE5300', borderRadius: 16, paddingHorizontal: 8, paddingVertical: 12 }}>
            <Image source={require('../../assets/icons/Headphone.svg')} style={{ height: 16, width: 16 }} />
          </View>
          <Text style={{ fontSize: 14, marginTop: 24, fontWeight: 600, color: '#FE5300' }}>Commander un repas</Text>
          <Text style={{ fontSize: 12, marginTop: 12, color: '#FE5300' }}>Faites vous livrer votre repas à domicile</Text>
        </TouchableOpacity>
      </Animated.View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OverlappingCardsAnimation;
