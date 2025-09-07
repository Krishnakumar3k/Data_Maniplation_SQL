import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
    const [inputval, setinputval] = useState({

        name: "",
        designation: "",
        email: "",
        phone: "",
        address: "",
      
    });

    // Handle input changes
    const setdata = (e) => {
        const { name, value } = e.target;
        setinputval((preval) => ({
            ...preval,
            [name]: value,
        }));
    };

    // API call to send data to backend
    const usercreate = async (e) => {
        e.preventDefault(); // prevent page reload
        try {
            const response = await axios.post("http://localhost:8080/api/create", inputval);
            console.log("User created:", response.data);
            alert("User registered successfully!");
        } catch (error) {
            console.error("Error creating user:", error);
            alert("Failed to register user!");
        }
    };

    return (
        <div className="container mt-4 mb-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">Register</h2>
                <NavLink to="/" className="btn btn-outline-secondary">
                    Home
                </NavLink>
            </div>

            <div className="row justify-content-center">
                <form className="col-lg-10 col-md-12" onSubmit={usercreate}>
                    <div className="row g-4">
                       

                        <div className="form-group col-lg-6 col-md-6 col-12">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={inputval.name}
                                onChange={setdata}
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group col-lg-6 col-md-6 col-12">
                            <label htmlFor="designation" className="form-label">Designation</label>
                            <input
                                type="text"
                                className="form-control"
                                name="designation"
                                value={inputval.designation}
                                onChange={setdata}
                                placeholder="Enter your designation"
                            />
                        </div>

                        <div className="form-group col-lg-6 col-md-6 col-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={inputval.email}
                                onChange={setdata}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group col-lg-6 col-md-6 col-12">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                value={inputval.phone}
                                onChange={setdata}
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="form-group col-lg-6 col-md-6 col-12">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={inputval.address}
                                onChange={setdata}
                                placeholder="Enter your address"
                            />
                        </div>

                        <div className="col-12 text-end">
                            <button type="submit" className="btn btn-primary px-4">
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
