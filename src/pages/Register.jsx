import React from 'react';
import Register from '../components/form/Register';

const handleSubmit = (formData) => {
    console.log(formData); // Do whatever you want with the form data, e.g., send it to a backend server
};

const RegisterPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <Register onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default RegisterPage;


// ContactPage.jsx

