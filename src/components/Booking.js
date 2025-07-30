// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import axios from 'axios';

// const Booking = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [startTime, setStartTime] = useState('');
//   const [name, setName] = useState('');
//   const [availability, setAvailability] = useState(null);
//   const [submittedData, setSubmittedData] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   const handleCheckAvailability = async () => {
//     if (!startDate) {
//       alert("Please select a date first.");
//       return;
//     }

//     try {
//       const response = await axios.post('/api/check-availability', {
//         date: startDate.toISOString().split('T')[0],
//       });
//       setAvailability(response.data.available);
//     } catch (err) {
//       console.error(err);
//       alert("Could not check availability.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (startDate && name && startTime) {
//       const bookingData = {
//         name,
//         date: startDate.toISOString().split('T')[0],
//         time: startTime,
//       };

//       try {
//         if (isEditing) {
//           await axios.put('/api/bookings/update', bookingData); // Update booking
//           alert("Booking updated successfully and user notified.");
//         } else {
//           await axios.post('/api/bookings', bookingData); // New booking
//           alert("Booking confirmed and email sent to business owner.");
//         }

//         setSubmittedData({
//           ...bookingData,
//           readableDate: startDate.toLocaleDateString(),
//           month: startDate.toLocaleString('default', { month: 'long' }),
//           year: startDate.getFullYear(),
//         });

//         setIsEditing(false);
//       } catch (error) {
//         console.error(error);
//         alert("Error submitting booking.");
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card shadow">
//         <div className="card-header bg-primary text-white">
//           <h2 className="mb-0">{isEditing ? 'Update Booking' : 'Booking Details'}</h2>
//         </div>
//         <div className="card-body">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Select Date</label>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => {
//                   setStartDate(date);
//                   setAvailability(null);
//                 }}
//                 minDate={new Date()}
//                 className="form-control"
//                 placeholderText="Click to show calendar"
//                 dateFormat="MMMM d, yyyy"
//                 isClearable
//               />
//             </div>

//             <div className="mb-3">
//               <button type="button" className="btn btn-outline-success" onClick={handleCheckAvailability}>
//                 Check Availability
//               </button>
//               {availability !== null && (
//                 <div className="mt-2">
//                   {availability ? (
//                     <span className="text-success">Available</span>
//                   ) : (
//                     <span className="text-danger">Not Available</span>
//                   )}
//                 </div>
//               )}
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Start Time</label>
//               <input
//                 type="time"
//                 className="form-control"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="form-label">Full Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary w-100"
//               disabled={!startDate || !name || !startTime}
//             >
//               {isEditing ? 'Update Booking' : 'Confirm Booking'}
//             </button>
//           </form>

//           {submittedData && (
//             <div className="mt-4 p-3 bg-light rounded">
//               <h4>Booking {isEditing ? 'Updated' : 'Confirmed'}!</h4>
//               <p><strong>Name:</strong> {submittedData.name}</p>
//               <p><strong>Date:</strong> {submittedData.readableDate}</p>
//               <p><strong>Month:</strong> {submittedData.month}</p>
//               <p><strong>Year:</strong> {submittedData.year}</p>
//               <p><strong>Time:</strong> {submittedData.time}</p>

//               <button
//                 className="btn btn-warning mt-2"
//                 onClick={() => {
//                   setIsEditing(true);
//                   setName(submittedData.name);
//                   setStartDate(new Date(submittedData.date));
//                   setStartTime(submittedData.time);
//                 }}
//               >
//                 Edit Booking
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Booking = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center" style={{ color: '#366000' }}>Book a Service</h2>
      <Form style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="service">
          <Form.Label>Select Service</Form.Label>
          <Form.Select required>
            <option value="">-- Choose a service --</option>
            <option value="Crop Management">Crop Management</option>
            <option value="Soil Analysis and Management">Soil Analysis and Management</option>
            <option value="Precision Agriculture">Precision Agriculture</option>
            <option value="Sustainability Consulting">Sustainability Consulting</option>
            <option value="Farm Management">Farm Management</option>
            <option value="Irrigation Management">Irrigation Management</option>
            <option value="Pest and Disease Management">Pest and Disease Management</option>
            <option value="Farm Mechanization">Farm Mechanization</option>
            <option value="Market Analysis and Access">Market Analysis and Access</option>
            <option value="Capacity Building and Training">Capacity Building and Training</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Preferred Date</Form.Label>
          <Form.Control type="date" required />
        </Form.Group>

        <div className="text-center">
          <Button
            type="submit"
            variant="success"
            style={{ backgroundColor: '#366000', borderColor: '#366000' }}
          >
            Submit Booking
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Booking;

