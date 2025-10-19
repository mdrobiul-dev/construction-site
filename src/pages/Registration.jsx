import { useState } from "react";
import Header from '../component/Registration/Header';
import Footer from '../component/Registration/Footer';

const Registration = () => {
     const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
  return (
     <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Banner */}
     <Header />

      {/* Form Section */}
      <div className="flex-1 flex justify-center items-center px-4 py-10">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Registration Form
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* First Name */}
            <div>
              <label className="block text-gray-600 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-600 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-600 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-600 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
     <Footer />
    </div>
  )
}

export default Registration
