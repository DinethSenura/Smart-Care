import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';

export default function Contact() {
  const handleCall = () => {
    Linking.openURL('tel:+1123456789');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@smartcarehospital.com');
  };

  const handleLocation = () => {
    Linking.openURL('https://www.google.com/maps?q=SmartCare+Hospital');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./../../assets/smartcare.png')} // Replace with your hospital logo
          style={styles.logo}
        />
        <Text style={styles.title}>Contact Us</Text>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Get in Touch</Text>
        <Text style={styles.text}>
          We're here to assist you 24/7. Feel free to reach out to us through any of the options below.
        </Text>
      </View>

      {/* Phone Number */}
      <TouchableOpacity style={styles.contactRow} onPress={handleCall}>
        <Image
          source={require('./../../assets/emergency.png')} // Replace with a phone icon
          style={styles.icon}
        />
        <Text style={styles.contactText}>+1 123 456 789</Text>
      </TouchableOpacity>

      {/* Email */}
      <TouchableOpacity style={styles.contactRow} onPress={handleEmail}>
        <Image
          source={require('./../../assets/email.png')} // Replace with an email icon
          style={styles.icon}
        />
        <Text style={styles.contactText}>info@smartcarehospital.com</Text>
      </TouchableOpacity>

      {/* Location */}
      <TouchableOpacity style={styles.contactRow} onPress={handleLocation}>
        <Image
          source={require('./../../assets/location.png')} // Replace with a location icon
          style={styles.icon}
        />
        <Text style={styles.contactText}>123 Main Street, Cityville</Text>
      </TouchableOpacity>

      {/* Feedback Form */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Send Us a Message</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message"
          multiline={true}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#d4d4d4',
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  contactText: {
    fontSize: 16,
    color: '#007bff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
