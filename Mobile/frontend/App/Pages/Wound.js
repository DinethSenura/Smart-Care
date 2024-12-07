import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert, Modal, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Wound() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

 const pickImage = async () => {
  const permission = await ImagePicker.requestCameraPermissionsAsync();
  if (permission.granted) {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setAnalysisResult(null); // Reset analysis result when a new image is selected
    }
  } else {
    Alert.alert('Permission Denied', 'Please allow access to your camera to capture a wound image.');
  }
};


  const analyzeImage = () => {
    if (!selectedImage) {
      Alert.alert('Error', 'Please upload a wound image first.');
      return;
    }
    // Mock result for AI analysis
    const mockResult = {
      type: 'Laceration',
      severity: 'Moderate',
      recommendation: 'Clean the wound and apply an antibiotic cream. Contact a general surgeon.',
    };
    setAnalysisResult(mockResult);
    setModalVisible(true);
  };

  const contactSpecialist = () => {
    Alert.alert('Contact Specialist', 'Connecting you to the most relevant specialist doctor...');
    // Here you can implement navigation or communication logic to connect with the doctor
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI-Driven Wound Analysis</Text>
      <Text style={styles.description}>
        Upload an image of the wound to analyze its type and severity. Get immediate recommendations and connect with
        a specialist.
      </Text>

      {/* Upload Image Section */}
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadButtonText}>Upload Wound Image</Text>
      </TouchableOpacity>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.uploadedImage} />
      )}

      {/* Analyze Button */}
      <TouchableOpacity style={styles.analyzeButton} onPress={analyzeImage}>
        <Text style={styles.analyzeButtonText}>Analyze Wound</Text>
      </TouchableOpacity>

      {/* Modal for Analysis Results */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Analysis Result</Text>
            {analysisResult ? (
              <>
                <Text style={styles.resultText}>Type: {analysisResult.type}</Text>
                <Text style={styles.resultText}>Severity: {analysisResult.severity}</Text>
                <Text style={styles.resultText}>Recommendation: {analysisResult.recommendation}</Text>
              </>
            ) : (
              <Text style={styles.resultText}>Analyzing...</Text>
            )}
            <Button title="Contact Specialist" onPress={contactSpecialist} />
            <Button title="Close" color="red" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 20,
    textAlign: 'center',
  },
  uploadButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadedImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  analyzeButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  analyzeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});
