import React, { useState, useEffect } from "react";
import axios from "axios";

const servicesList = [
  { id: 1, name: "Crop Management", price: 100 },
  { id: 2, name: "Soil Analysis and Management", price: 120 },
  { id: 3, name: "Precision Agriculture", price: 150 },//x
  { id: 4, name: "Sustainability Consulting", price: 130 },//x
  { id: 5, name: "Farm Management", price: 110 },
  { id: 6, name: "Irrigation Management", price: 140 },
  { id: 7, name: "Pest and disease control", price: 115 },
  { id: 8, name: "Farm Mechanization", price: 160 },
  { id: 9, name: "Market Analysis and Access", price: 125 },
  { id: 10, name: "Capacity Building and Training", price: 135 }
];

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "",
    date: ""
  });

  const [showCodeInput, setShowCodeInput] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
  const [bookingId, setBookingId] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [codeSentTo, setCodeSentTo] = useState("");

  const selectedService = servicesList.find(s => s.name === form.service);

  useEffect(() => {
    if (showCodeInput && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [showCodeInput, countdown]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCodeChange = (index, value) => {
    if (value.length > 1) return;
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleBookNow = async () => {
    setError("");
    setSuccess("");

    if (!form.name || !form.contact || !form.service || !form.date) {
      setError("Please fill all fields.");
      return;
    }

    const selectedDate = new Date(form.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setError("Preferred date cannot be in the past.");
      return;
    }

    if (!selectedService) {
      setError("Invalid service selected.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/v1/bookings/create",
        {
          name: form.name,
          contact: form.contact,
          date: form.date,
          service_id: selectedService.id
        },
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {}
        }
      );

      setBookingId(res.data.booking_id);
      setShowCodeInput(true);
      setCountdown(60);

      if (form.contact.includes("@")) {
        setCodeSentTo("email");
      } else {
        setCodeSentTo("SMS");
      }
    } catch (err) {
      setError(err?.response?.data?.error || "Booking failed.");
    }
  };

  const handleConfirmBooking = async () => {
    setError("");
    setSuccess("");

    const code = verificationCode.join("");
    if (code.length < 6) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/bookings/verify/${bookingId}`,
        { verification_code: code }
      );

      if (res.data.message === "Booking confirmed successfully") {
        setSuccess(" Booking confirmed successfully!");
        setShowCodeInput(false);
        setVerificationCode(["", "", "", "", "", ""]);
        setBookingId(null);
        setForm({ name: "", contact: "", service: "", date: "" });
      }
    } catch (error) {
      const message = error?.response?.data?.error || "Failed to confirm booking.";
      setError(message);
    }
  };

  const handleResend = async () => {
    setError("");
    if (!bookingId) {
      setError("No booking to resend code for.");
      return;
    }

    try {
      await axios.post(`http://localhost:5000/api/v1/bookings/resend/${bookingId}`);
      setCountdown(60);
      setSuccess("New code sent.");
    } catch (err) {
      setError("Failed to resend code.");
    }
  };

  return (
    <div style={{
      backgroundColor: "#E7F0D6",
      padding: "2rem",
      borderRadius: "8px",
      maxWidth: "500px",
      margin: "2rem auto",
      boxShadow: "0 0 10px rgba(54, 96, 0, 0.3)"
    }}>
      <h2 style={{ color: "#366000", textAlign: "center", marginBottom: "1.5rem" }}>
        Book a Service
      </h2>

      {success && <div style={{ color: "green", fontWeight: "bold", textAlign: "center", marginBottom: "1rem" }}>{success}</div>}
      {error && <div style={{ color: "red", fontWeight: "bold", textAlign: "center", marginBottom: "1rem" }}>{error}</div>}

      {!showCodeInput ? (
        <>
          <label style={{ color: "#366000" }}>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "1rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />

          <label style={{ color: "#366000" }}>Email---</label>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleInputChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "1rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />

          <label style={{ color: "#366000" }}>Select Service</label>
          <select
            name="service"
            value={form.service}
            onChange={handleInputChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "1rem", borderRadius: "4px", border: "1px solid #ccc" }}
          >
            <option value="">-- Choose a service --</option>
            {servicesList.map(service => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>

          <label style={{ color: "#366000" }}>Preferred Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleInputChange}
            min={new Date().toISOString().split("T")[0]}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "1.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />

          <button
            onClick={handleBookNow}
            style={{ width: "100%", backgroundColor: "#366000", color: "white", padding: "12px", fontWeight: "bold", border: "none", borderRadius: "6px", cursor: "pointer" }}
          >
            Book Now
          </button>
        </>
      ) : (
        <div style={{ padding: "1.5rem", borderRadius: "8px", textAlign: "center", backgroundColor: "#f9fff0" }}>
          <h3 style={{ color: "#366000", marginBottom: "0.5rem" }}>Enter Verification Code</h3>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "1rem" }}>
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                style={{ width: "40px", height: "40px", fontSize: "24px", textAlign: "center", borderRadius: "6px", border: "1px solid #366000" }}
              />
            ))}
          </div>

          <p style={{ color: "#366000", marginBottom: "1rem" }}>
            Code sent via <strong>{codeSentTo}</strong>.{" "}
            {countdown > 0 ? (
              <>Expires in {countdown} seconds</>
            ) : (
              <button onClick={handleResend} style={{ color: "#366000", textDecoration: "underline", background: "none", border: "none", cursor: "pointer", fontWeight: "bold" }}>
                Resend Code
              </button>
            )}
          </p>

          <button
            onClick={handleConfirmBooking}
            style={{ width: "100%", backgroundColor: "#274800", color: "white", padding: "12px", fontWeight: "bold", border: "none", borderRadius: "6px", cursor: "pointer" }}
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BookingForm = () => {
//   const [services, setServices] = useState([]);
//   const [selectedService, setSelectedService] = useState(null);
//   const [guestName, setGuestName] = useState("");
//   const [guestContact, setGuestContact] = useState("");
//   const [preferredDate, setPreferredDate] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const backendURL = "http://127.0.0.1:5000/api/v1";

//   // Fetch services from backend
//   useEffect(() => {
//     axios
//       .get(`${backendURL}/services`)
//       .then((res) => {
//         setServices(res.data.services || []);
//       })
//       .catch((err) => {
//         setError("Failed to load services.");
//         console.error(err);
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!selectedService || !guestName || !guestContact || !preferredDate) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     const payload = {
//       service_id: selectedService.service_id,
//       guest_name: guestName,
//       guest_contact: guestContact,
//       preferred_date: preferredDate,
//     };

//     axios
//       .post(`${backendURL}/bookings/create`, payload)
//       .then((res) => {
//         if (res.data.message) {
//           setMessage(`✅ ${res.data.message}`);
//           setError("");
//           // Reset form
//           setGuestName("");
//           setGuestContact("");
//           setPreferredDate("");
//           setSelectedService(null);
//         }
//       })
//       .catch((err) => {
//         setError("Booking failed. Please try again.");
//         console.error(err);
//       });
//   };

//   return (
//     <div className="container mt-4" style={{ maxWidth: "600px" }}>
//       <h2 className="mb-4">Book a Service</h2>
//       {message && <div className="alert alert-success">{message}</div>}
//       {error && <div className="alert alert-danger">{error}</div>}

//       <form onSubmit={handleSubmit}>
//         {/* Guest Name */}
//         <div className="mb-3">
//           <label htmlFor="guestName" className="form-label">
//             Your Name
//           </label>
//           <input
//             type="text"
//             id="guestName"
//             className="form-control"
//             value={guestName}
//             onChange={(e) => setGuestName(e.target.value)}
//           />
//         </div>

//         {/* Guest Contact */}
//         <div className="mb-3">
//           <label htmlFor="guestContact" className="form-label">
//             Contact Info (Phone or Email)
//           </label>
//           <input
//             type="text"
//             id="guestContact"
//             className="form-control"
//             value={guestContact}
//             onChange={(e) => setGuestContact(e.target.value)}
//           />
//         </div>

//         {/* Preferred Date */}
//         <div className="mb-3">
//           <label htmlFor="preferredDate" className="form-label">
//             Preferred Date
//           </label>
//           <input
//             type="date"
//             id="preferredDate"
//             className="form-control"
//             value={preferredDate}
//             onChange={(e) => setPreferredDate(e.target.value)}
//           />
//         </div>

//         {/* Service Dropdown */}
//         <div className="mb-3">
//           <label htmlFor="serviceSelect" className="form-label">
//             Select Service
//           </label>
//           <select
//             id="serviceSelect"
//             className="form-select"
//             value={selectedService ? selectedService.service_id : ""}
//             onChange={(e) => {
//               const selectedId = parseInt(e.target.value);
//               const service = services.find((s) => s.service_id === selectedId);
//               setSelectedService(service);
//             }}
//           >
//             <option value="">-- Choose a service --</option>
//             {services.map((service) => (
//               <option key={service.service_id} value={service.service_id}>
//                 {service.name} - UGX {service.price}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Submit */}
//         <button type="submit" className="btn btn-primary w-100">
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;
