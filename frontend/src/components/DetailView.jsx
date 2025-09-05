import React from "react";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import CardContent from '@mui/material/CardContent';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import img from './images/profile.png';

const DataDetailView = () => {
    return (
        <>
            <div className="container mt-3">
                <h1 style={{ "fontWeight": "400" }}>User Detailes</h1>
                <Card sx={{ maxWidth: 600 }}>

                    <CardContent>
                        <div className="add-btn">
                                    <button className="btn btn-primary text-nowrap me-2">
                                        <CreateIcon />
                                    </button>
                                    <button className="btn btn-danger text-nowrap">
                                        <DeleteIcon />
                                    </button></div>
                        <div className="row">
                            <div className="left-view col-lg-6 col-md-6 col-12">
                                <img src={img} alt="Profile" style={{ width: 50 }} className="img-fluid rounded-circle mb-3" />
                                <h3>Id: <span style={{ fontWeight: "400" }}>1</span></h3>
                                <h3 className="mt-3">Name : <span style={{ fontWeight: "400" }}>Krishna Kumar</span></h3>
                                <p> <WorkIcon /> Designation: <span style={{ fontWeight: "400" }}>Software Engineer</span></p>
                                <p> <MailOutlineIcon /> Email: <span style={{ fontWeight: "400" }}>krishna@example.com</span></p>

                            </div>
                            <div className="right-view col-lg-6 col-md-6 col-12">
                                
                                <p className="mt-5"> <PhoneIcon /> Phone: <span style={{ fontWeight: "400" }}>123-456-7890</span></p>
                                <p className="mt-5"> <LocationOnIcon /> Address: <span style={{ fontWeight: "400" }}>India</span></p>

                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </>
    )
}

export default DataDetailView;