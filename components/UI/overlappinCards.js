import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const OverlappingCardsAnimation = () => {
    const colors = ['#5C6BC0', '#009688', '#F44336'];
    this.state = {  cardsPan: new Animated.ValueXY() }

    this.cardsPanResponder = PanResponder.create( {
        onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderMove: ( event, gestureState ) => {
          this.state
            .cardsPan
            .setValue(
              { x: gestureState.dx, y: this.state.cardsPan.y }
             );
        },
        onPanResponderTerminationRequest: () => false,
        onPanResponderRelease: ( event, gestureState ) => {},
      }
      
      onPanResponderRelease: ( event, gestureState ) => {
        // bring the translationX back to 0
        Animated.timing( this.state.cardsPan, {
          toValue: 0,
          duration: 300,
        } ).start();
        // will be used to interpolate values in each view
        Animated.timing( this.state.cardsStackedAnim, {
          toValue: 1,
          duration: 300,
        } ).start( () => {
          // reset cardsStackedAnim's value to 0 when animation ends
          this.state.cardsStackedAnim.setValue( 0 );
          // increment card position when animation ends
          this.setState({
            currentIndex: this.state.currentIndex + 1,
          });
        } );
    },);

      this.state = {
        cardsPan: new Animated.ValueXY(),
        cardsStackedAnim: new Animated.Value( 0 ), // add this statement
        currentIndex: 0, // and this to track card positions
      };

    return (
        <View style={styles.container}>

            <View> 
                <Animated.View    // last card
                    style={{
                        width: 300, height: 150,
                        position: 'absolute',
                        zIndex: 1,
                        bottom: 40,
                        backgroundColor: colors[2], // Red
                        opacity: 0.3,
                        transform: [{ scale: 0.80 }],
                    }} ></Animated.View>
                <Animated.View    // second card
                    style={{
                        width: 300, height: 150,
                        position: 'absolute',
                        zIndex: 2,
                        bottom: 20,
                        backgroundColor: colors[1], // Green
                        opacity: 0.6,
                        transform: [{ scale: 0.90 }],
                    }} ></Animated.View>
                <Animated.View    // frontmost card
                    style={{
                        width: 300, height: 150,
                        position: 'absolute',
                        zIndex: 3,
                        bottom: 0,
                        backgroundColor: colors[0], // Blue
                        opacity: 1,
                        transform: [{ scale: 1.0 }],
                    }} ></Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        position: 'absolute',
        width: 200,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 4,
    },
    cardText: {
        color: 'white',
        fontSize: 24,
    },
});

export default OverlappingCardsAnimation;
