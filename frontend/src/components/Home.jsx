import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='add-btn mt-2'>
                <button onClick={() => navigate('/register')} className='btn btn-primary'>Add Data</button>
            </div>

            <div className="table-responsive mt-3">
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col" className="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Krishna</td>
                            <td>SDE</td>
                            <td>kk@gmail.com</td>
                            <td>6201654835</td>
                            <td>Noida</td>
                            <td className="d-flex justify-content-end gap-2 flex-wrap">
                                <button className="btn btn-success text-nowrap me-2">
                                    <RemoveRedEyeIcon />
                                </button>
                                <button className="btn btn-primary text-nowrap me-2">
                                    <CreateIcon />
                                </button>
                                <button className="btn btn-danger text-nowrap">
                                    <DeleteIcon />
                                </button>
                            </td>
                        </tr>

                         <tr>
                            <th scope="row">1</th>
                            <td>Krishna</td>
                            <td>SDE</td>
                            <td>kk@gmail.com</td>
                            <td>6201654835</td>
                            <td>Delhi</td>
                            <td className="d-flex justify-content-end gap-2 flex-wrap">
                                 <button className="btn btn-success text-nowrap me-2">
                                    <RemoveRedEyeIcon />
                                </button>
                                <button className="btn btn-primary text-nowrap me-2">
                                    <CreateIcon />
                                </button>
                                <button className="btn btn-danger text-nowrap">
                                    <DeleteIcon />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
