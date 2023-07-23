import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, PanResponder } from 'react-native';

const OverlappingCardsAnimation = () => {
  const colors = ['#FFF', '#FFF', '#FFF '];

  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPan = new Animated.ValueXY();
  const cardsStackedAnim = new Animated.Value(0);

  const cardsPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (event, gestureState) => {
      cardsPan.setValue({ x: gestureState.dx, y: 0 });
    },
    onPanResponderTerminationRequest: () => false,
    onPanResponderRelease: (event, gestureState) => {
      Animated.spring(cardsPan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
      Animated.spring(cardsStackedAnim, {
        toValue: 1,
        useNativeDriver: false,
      }).start(() => {
        cardsStackedAnim.setValue(0);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      });
    },
  });

  return (
      <View>
        <Animated.View
          style={{
            width: 268.78, height: 300,
            position: 'absolute',
            top: -48,
            left: 32,
            borderRadius: 32,
            backgroundColor: colors[(currentIndex + 2) % 3],
            zIndex: 1,
            transform: [
              { translateY: cardsStackedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [40, 20],
              })},
              { scale: cardsStackedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.8, 0.9],
              })},
            ],
            opacity: cardsStackedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.3, 0.6],
            }),
          }}
        />
        <Animated.View
          style={{
            width: 332, height: 374.912,
            position: 'absolute',
            top: -0,
            left: 2,
            borderRadius: 32,
            backgroundColor: colors[(currentIndex + 1) % 3],
            zIndex: 2,
            transform: [
              { translateY: cardsStackedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              })},
              { scale: cardsStackedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1.0],
              })},
            ],
            opacity: cardsStackedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.6, 1],
            }),
          }}
        />
        <Animated.View
          {...cardsPanResponder.panHandlers}
          style={{
            width: 338, height: 428,
            position: 'absolute',
            top: 60,
            left: -4,
            borderRadius: 32,
            backgroundColor: colors[currentIndex % 3],
            zIndex: cardsStackedAnim.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [3, 2, 0],
            }),
            transform: [
              { translateX: cardsPan.x },
              { translateY: cardsStackedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 40],
              })},
              { scale: cardsStackedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.8],
              })},
            ],
            opacity: cardsStackedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.3],
            }),
          }}
        />
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
