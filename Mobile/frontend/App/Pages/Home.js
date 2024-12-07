import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Modal, TextInput, Button, Linking } from 'react-native';
import React,{useState} from 'react';
import { navigate } from 'expo-router/build/global-state/routing';

export default function Home({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', date: '', time: '' });
  

  const showEmergencyAlert = () => {
    Alert.alert(
      'Emergency Contact',
      'Dial 0112-234 567 for immediate assistance.',
      [
        { text: 'Call Now', onPress: () => Linking.openURL('tel:0112234567') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.date && formData.time) {
      Alert.alert(
        'Appointment Submitted',
        `Name: ${formData.name}, Date: ${formData.date}, Time: ${formData.time}`
      );
      setModalVisible(false);
      setFormData({ name: '', date: '', time: '' });
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Combined Buttons */}
      <View style={styles.buttonContainer}>
        {/* Emergency Button */}
        <TouchableOpacity
          style={[styles.button, styles.button1]}
          onPress={showEmergencyAlert}
        >
          <View style={styles.buttonContent}>
            <Image
              source={require('./../../assets/emergency.png')} // Replace with the path to your emergency icon
              style={styles.icon}
            />
            <Text style={styles.buttonText}>EMERGENCY 0112-234 567</Text>
          </View>
        </TouchableOpacity>

         {/* Make an Appointment Button */}
         <TouchableOpacity
          style={[styles.button, styles.button2]}
          onPress={toggleModal}
        >
          <View style={styles.buttonContent}>
            <Image
              source={require('./../../assets/appointment.png')}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>MAKE AN APPOINTMENT</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Modal for Appointment Form */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Make an Appointment</Text>
            <TextInput
              placeholder="Your Name"
              style={styles.input}
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
            <TextInput
              placeholder="Preferred Date"
              style={styles.input}
              value={formData.date}
              onChangeText={(text) => setFormData({ ...formData, date: text })}
            />
            <TextInput
              placeholder="Preferred Time"
              style={styles.input}
              value={formData.time}
              onChangeText={(text) => setFormData({ ...formData, time: text })}
            />
            <View style={styles.buttonRow}>
              <Button title="Submit" onPress={handleFormSubmit} />
              <Button title="Cancel" color="red" onPress={toggleModal} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Rest of the code remains unchanged */}
      {/* Info Box with Buttons */}
      <View style={styles.infoBox}>
        {/* Image */}
        <Image
          source={require('./../../assets/smartcare.png')} // Replace with the path to your image
          style={styles.infoBoxImage}
        />

        {/* Buttons Row */}
        <View style={styles.horizontalButtons}>
          <TouchableOpacity
            style={[styles.infoButton, styles.infoButton1]}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.infoButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.infoButton, styles.infoButton2]}
            onPress={() => navigation.navigate('Careers')}
          >
            <Text style={styles.infoButtonText}>Careers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.infoButton, styles.infoButton3]}
            onPress={() => navigation.navigate('About')}
          >
            <Text style={styles.infoButtonText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.infoButton, styles.infoButton4]}
            onPress={() => navigation.navigate('Contact')}
          >
            <Text style={styles.infoButtonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Four Vertical Buttons Below */}
      <View style={styles.verticalButtons}>
        <TouchableOpacity
          style={styles.verticalButton}
          onPress={() => navigation.navigate ('Wound')}
        >
          <Text style={styles.verticalButtonText}>ANALYSES OF WOUND</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.verticalButton}
          onPress={() => navigation.navigate('Emergency')}
        >
          <Text style={styles.verticalButtonText}>EMERGENCY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.verticalButton}
          onPress={() => navigation.navigate('Blood')}
        >
          <Text style={styles.verticalButtonText}>BLOOD BANK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.verticalButton}
          onPress={() => navigation.navigate('Resources')}
        >
          <Text style={styles.verticalButtonText}>RESOURCES</Text>
        </TouchableOpacity>
      </View>

      {/* Images Below Vertical Buttons */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./../../assets/home.png')} // Replace with your image path
          style={styles.imageBelowButtons}
        />
        <Image
          source={require('./../../assets/home2.png')} // Replace with your second image path
          style={styles.imageBelowButtons}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 100,
  },
  button: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 0,
    marginHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    top: '0%',
  },
  button1: {
    backgroundColor: '#007bff',
  },
  button2: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 10,
    right: '10%',
    top: '60%',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -65,
    left: '20%',
  },
  icon: {
    width: 15,
    height: 12,
    resizeMode: 'contain',
    right: '5%',
    top: '60%',
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
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#d4d4d4',
    padding: 5,
    alignItems: 'center',
    borderRadius: 0,
    marginTop: -100,
    paddingHorizontal: 100,
    paddingVertical: 35,
  },
  infoBoxImage: {
    width: '80%',
    height: 90,
    resizeMode: 'cover',
    borderRadius: 0,
    right: '83%',
    marginTop: -40,
  },
  horizontalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -50,
    width: '45%',
    left: '-20%',
  },
  infoButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: -15,
    left: '-10%',
  },
  infoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 6,
  },
  verticalButtons: {
    marginTop: 80,
    alignItems: 'center',
  },
  verticalButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 20,
    paddingHorizontal: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginVertical: 10,
  },
  verticalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    right:'7%',
  },
  imageBelowButtons: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  
  },
});
