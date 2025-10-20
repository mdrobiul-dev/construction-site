import { useState, useEffect } from "react";
import Footer from '../components/Registration/Footer';
import { MdOutlineNightlight, MdOutlineNightlightRound } from "react-icons/md";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [darkmode, setdarkmode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setdarkmode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setdarkmode(false);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const toggleTheme = () => {
    if (darkmode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setdarkmode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setdarkmode(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col transition-colors duration-300">
      {/* Header */}
      <div className="bg-[url('/banner.jpg')] bg-cover bg-center flex items-center justify-around h-52 relative ">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-white text-3xl md:text-4xl font-bold relative z-10 text-center">
          Create Your Account
        </h1>
        <div className="flex items-start relative z-10">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors cursor-pointer"
          >
            {darkmode ? (
              <MdOutlineNightlightRound className="text-4xl text-yellow-400" />
            ) : (
              <MdOutlineNightlight className="text-gray-800 text-4xl" />
            )}
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex justify-center items-center px-4 py-10">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl w-full max-w-2xl p-8 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Registration Form
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* First Name */}
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
  );
};

export default Registration;

