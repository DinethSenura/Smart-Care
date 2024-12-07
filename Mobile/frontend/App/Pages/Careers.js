import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal, Alert, Button } from 'react-native';

export default function Careers() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationData, setApplicationData] = useState({ name: '', email: '', resume: '' });

  // Sample Job Openings
  const jobOpenings = [
    { id: '1', title: 'Registered Nurse', department: 'ICU', location: 'Colombo', type: 'Full-Time' },
    { id: '2', title: 'Pharmacist', department: 'Pharmacy', location: 'Kandy', type: 'Part-Time' },
    { id: '3', title: 'Administrative Assistant', department: 'HR', location: 'Galle', type: 'Full-Time' },
  ];

  const toggleModal = (job = null) => {
    setSelectedJob(job);
    setModalVisible(!isModalVisible);
  };

  const handleApplicationSubmit = () => {
    if (applicationData.name && applicationData.email && applicationData.resume) {
      Alert.alert(
        'Application Submitted',
        `Thank you for applying for the position of ${selectedJob.title}. Our team will review your application and contact you soon!`
      );
      setApplicationData({ name: '', email: '', resume: '' });
      setModalVisible(false);
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Our Team</Text>
      <Text style={styles.description}>
        We are always looking for passionate and talented individuals to join our team. Explore current job openings and
        take the next step in your career with us.
      </Text>

      {/* Job Listings */}
      <FlatList
        data={jobOpenings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.jobCard} onPress={() => toggleModal(item)}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobDetails}>
              Department: {item.department} | Location: {item.location} | Type: {item.type}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Application Modal */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Apply for {selectedJob?.title}</Text>
            <TextInput
              placeholder="Your Name"
              style={styles.input}
              value={applicationData.name}
              onChangeText={(text) => setApplicationData({ ...applicationData, name: text })}
            />
            <TextInput
              placeholder="Your Email"
              style={styles.input}
              value={applicationData.email}
              onChangeText={(text) => setApplicationData({ ...applicationData, email: text })}
            />
            <TextInput
              placeholder="Resume Link (e.g., Google Drive, Dropbox)"
              style={styles.input}
              value={applicationData.resume}
              onChangeText={(text) => setApplicationData({ ...applicationData, resume: text })}
            />
            <View style={styles.buttonRow}>
              <Button title="Submit" onPress={handleApplicationSubmit} />
              <Button title="Cancel" color="red" onPress={() => toggleModal()} />
            </View>
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
  jobCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
  jobDetails: {
    fontSize: 14,
    color: '#6c757d',
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
    fontSize: 20,
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
});
