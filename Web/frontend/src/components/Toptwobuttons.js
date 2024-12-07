import React, { useState } from 'react';
import '../Styles/Toptwobuttons.css';

export default function Toptwobuttons() {
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isAppointment, setIsAppointment] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    date: '',
    time: '',
  });
  const [errors, setErrors] = useState({});

  const handleButtonClick = (msg, appointment = false) => {
    setMessage(msg);
    setIsAppointment(appointment);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsAppointment(false);
    setAppointmentData({ name: '', date: '', time: '' });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prev) => ({ ...prev, [name]: value }));

    // Validate the Name field
    if (name === 'name') {
      validateName(value);
    }
  };

  const validateName = (value) => {
    const textOnlyRegex = /^[A-Za-z\s]+$/; // Allows only letters and spaces
    if (!textOnlyRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        name: 'Name must contain only letters and spaces.',
      }));
    } else {
      setErrors((prev) => {
        const { name, ...rest } = prev;
        return rest; // Remove name error if validation passes
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submission
    if (!appointmentData.name || errors.name) {
      alert('Please correct the errors before submitting.');
      return;
    }

    console.log('Appointment Data:', appointmentData);
    alert('Appointment Submitted!');
    closeModal();
  };

  return (
    <div className="container">
      {/* Buttons */}
      <div className="button-container">
        <button
          className="button1"
          onClick={() => handleButtonClick('Emergency: 011-32144578')}
        >
          Emergency
        </button>
        <button
          className="button2"
          onClick={() => handleButtonClick('Fill in the appointment details', true)}
        >
          Appointment
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {isAppointment ? (
              <form onSubmit={handleFormSubmit}>
                <h2>Appointment Details</h2>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={appointmentData.name}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={appointmentData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time">Time:</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={appointmentData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-buttons">
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                  <button type="button" className="close-button" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <p>{message}</p>
                <button className="close-button" onClick={closeModal}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
