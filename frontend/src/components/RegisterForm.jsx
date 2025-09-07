import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
    // State to store form input values
    const [inputval, setinputval] = useState({
        name: "",
        designation: "",
        email: "",
        phone: "",
        address: "",
    });

    // Function: Handle input changes (update state dynamically based on name attribute)
    const setdata = (e) => {
        const { name, value } = e.target;
        setinputval((preval) => ({
            ...preval,      // Keep previous values
            [name]: value,  // Update only the changed field
        }));
    };

    // Function: Handle form submission (send data to backend API)
    const usercreate = async (e) => {
        e.preventDefault(); // Prevent page reload when form is submitted

        // Simple client-side validation
        if (!inputval.name || !inputval.email) {
            alert("Name and Email are required!");
            return; // Stop if required fields are missing
        }

        try {
            // Destructure only required fields (ignore extra ones if present)
            const { name, designation, email, phone, address } = inputval;

            // Send POST request to backend API with form data
            const response = await axios.post("http://localhost:8080/api/create", {
                name,
                designation,
                email,
                phone,
                address,
            });

            // Show success message returned by the backend
            alert(response.data.message || "User registered successfully!");

            // Reset form fields after successful registration
            setinputval({
                name: "",
                designation: "",
                email: "",
                phone: "",
                address: "",
            });
        } catch (error) {
            // Catch network or server errors and display them
            console.error("Error creating user:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Failed to register user!");
        }
    };

      const navigate = useNavigate();
    return (
        <div className="container mt-4 mb-5">
            {/* Header with navigation back to Home */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">Register</h2>
                <NavLink to="/" className="btn btn-outline-secondary">Home</NavLink>
            </div>

            {/* Registration form */}
            <div className="row justify-content-center">
                <form className="col-lg-10 col-md-12" onSubmit={usercreate}>
                    <div className="row g-4">
                        {/* Name Input */}
                        <div className="form-group col-lg-6 col-md-6 col-12">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={inputval.name}
                                onChange={setdata}
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Designation Input */}
                        <div className="form-group col-lg-6 col-md-6 col-12">
                            <label>Designation</label>
                            <input
                                type="text"
                                className="form-control"
                                name="designation"
                                value={inputval.designation}
                                onChange={setdata}
                                placeholder="Enter your designation"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="form-group col-lg-6 col-md-6 col-12">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={inputval.email}
                                onChange={setdata}
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Phone Input */}
                        <div className="form-group col-lg-6 col-md-6 col-12">
                            <label>Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                value={inputval.phone}
                                onChange={setdata}
                                placeholder="Enter your phone number"
                            />
                        </div>

                        {/* Address Input */}
                        <div className="form-group col-lg-6 col-md-6 col-12">
                            <label>Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={inputval.address}
                                onChange={setdata}
                                placeholder="Enter your address"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="col-12 text-end">
                            <button onClick={()=>navigate("/")} type="submit" className="btn btn-primary px-4">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
