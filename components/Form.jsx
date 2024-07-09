import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        username: Yup.string().required('Your Name is required'),
        email: Yup.string().email('Invalid email address').required('Your Email is required'),
        contact: Yup.string().min(10).required('Your Contact Number is required'),
        refName: Yup.string().required("Referee's Name is required"),
        refEmail: Yup.string().email('Invalid email address').required("Referee's Email is required"),
        refContact: Yup.string().min(10).required("Referee's Contact Number is required"),
        relation: Yup.string().required('Your Relationship to Referee is required'),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            contact: '',
            refName: '',
            refEmail: '',
            refContact: '',
            relation: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const res = await axios.post("https://accredian-backend-task-mlof.onrender.com/api/referral", values);
                toast.success(res.data.message);
                navigate("/");
                formik.resetForm();
            } catch (error) {
                console.error(error);
                toast.error(error.response?.data?.message || 'Submission failed');
            }
        },
    });

    return (
        <div className="container mx-auto py-8 p-4">
            <div className="max-w-md mx-auto mt-3 border border-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-light">
                <h3 className="text-2xl font-bold text-center mb-6 p-3"><i className="fa-solid fa-user"></i> Refer Form</h3>
                <form onSubmit={formik.handleSubmit} className='p-4'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Your Name:</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            name="username"
                            type="text"
                            placeholder="Your Name"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-red-500 text-xs mt-1" style={{ color: 'red' }}>{formik.errors.username}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Your Email:</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-xs mt-1" style={{ color: 'red' }}>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Your Contact Number:</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="contact"
                            name="contact"
                            type="text"
                            placeholder="Your Contact Number"
                            value={formik.values.contact}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.contact && formik.errors.contact ? (
                            <div className="text-red-500 text-xs mt-1" style={{ color: 'red' }}>{formik.errors.contact}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="refereeName">Referee's Name:</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="refereeName"
                            name="refName"
                            type="text"
                            placeholder="Referee's Name"
                            value={formik.values.refName}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.refName && formik.errors.refName ? (
                            <div className="text-red-500 text-xs mt-1" style={{ color: 'red' }}>{formik.errors.refName}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="refereeEmail">Referee's Email:</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="refereeEmail"
                            name="refEmail"
                            type="email"
                            placeholder="Referee's Email"
                            value={formik.values.refEmail}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.refEmail && formik.errors.refEmail ? (
                            <div className="text-red-500 text-xs mt-1" style={{ color: 'red' }}>{formik.errors.refEmail}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="refereeContact">Referee's Contact Number:</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="refereeContact"
                            name="refContact"
                            type="text"
                            placeholder="Referee's Contact Number"
                            value={formik.values.refContact}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.refContact && formik.errors.refContact ? (
                            <div className="text-red-500 text-xs mt-1" style={{ color: 'red' }}>{formik.errors.refContact}</div>
                        ) : null}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="relation">Your Relationship to Referee:</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="relation"
                            name="relation"
                            type="text"
                            placeholder="Your Relationship to Referee"
                            value={formik.values.relation}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.relation && formik.errors.relation ? (
                            <div className="text-red-500 text-xs mt-1" style={{ color: 'red' }}>{formik.errors.relation}</div>
                        ) : null}
                    </div>
                    <div className="flex items-center justify-center text-center mt-2">
                        <button
                            className="btn btn-success text-white"
                            type="submit"
                        >
                            Submit
                        </button>
                        <div className='mt-2'>
                            <button onClick={() => navigate("/")} className='btn btn-secondary text-white'>Back to Homepage</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
