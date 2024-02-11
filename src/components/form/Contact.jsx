


import React, { useState } from 'react';

export const Contact = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="bg-transparent border-b-2 w-1/2 p-3  focus:outline-0 " placeholder='Name' required />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="bg-transparent border-b-2 w-1/2 p-3  focus:outline-0 " placeholder='Phone' required />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="bg-transparent border-b-2 w-1/2 p-3  focus:outline-0 " placeholder='Email' required />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="bg-transparent border-b-2 w-1/2 p-3  focus:outline-0 " placeholder='Message' required />
            </div>
            <button type="submit" className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
    );
};

