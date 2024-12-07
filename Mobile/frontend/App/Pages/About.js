import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./../../assets/smartcare.png')} // Replace with your hospital logo
          style={styles.logo}
        />
        <Text style={styles.title}>About Us</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Who We Are</Text>
        <Text style={styles.text}>
          Welcome to **SmartCare Hospital**, where compassionate care meets
          cutting-edge technology. We are a leading healthcare institution
          dedicated to improving lives through exceptional medical services and
          innovation.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Our Mission</Text>
        <Text style={styles.text}>
          Our mission is to provide accessible, high-quality healthcare to
          every individual in need. We strive to foster a culture of empathy,
          excellence, and innovation in everything we do.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Our Vision</Text>
        <Text style={styles.text}>
          To be a globally recognized healthcare provider known for improving
          patient outcomes and transforming lives through advanced medical care
          and community-focused initiatives.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Why Choose Us?</Text>
        <Text style={styles.text}>
          - Comprehensive healthcare services, from preventive care to
          advanced surgeries.{'\n'}
          - A team of experienced and compassionate healthcare professionals.{'\n'}
          - State-of-the-art technology and modern medical facilities.{'\n'}
          - Commitment to patient safety, comfort, and satisfaction.{'\n'}
          - 24/7 emergency care and support.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Our Core Values</Text>
        <Text style={styles.text}>
          - **Integrity**: Upholding the highest ethical standards.{'\n'}
          - **Compassion**: Providing care with empathy and respect.{'\n'}
          - **Excellence**: Striving for continuous improvement.{'\n'}
          - **Innovation**: Embracing new technologies and practices.{'\n'}
          - **Community**: Building healthier communities together.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Thank you for trusting **SmartCare Hospital** with your health. We are
          here for you every step of the way.
        </Text>
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
  },
  footer: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
