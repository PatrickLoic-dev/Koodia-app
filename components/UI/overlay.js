import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const CustomModal = ({ visible, onClose, children }) => {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <StatusBar style="auto" />
        <View style={styles.modalContent}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: 358,
    height: 234, // Set your desired height for the modal
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingTop: 38,
    paddingHorizontal: 24, 
    paddingBottom: 24,
    position: 'absolute',
    bottom: 16,
    width: 338,
    height: 234,
  },
});

export default CustomModal;