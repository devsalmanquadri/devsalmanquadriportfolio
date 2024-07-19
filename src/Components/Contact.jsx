// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const scriptURL =
      "https://script.google.com/macros/s/AKfycby8rKRJR0ALHqzPeSBp5TVdAV6SnDMsRAorxB8P9Fe3Jfryn6R5iVdO7802FKvpqN_U/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", desc: "" });
      } else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form submission failed.");
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setFormErrors({
      name: "",
      email: "",
      message: "",
    });
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in",
      once: true,
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gray-900 lg:flex-col-reverse lg:py-16 ">
      <div
        data-aos="fade-up"
        className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg bg-opacity-80 backdrop-filter backdrop-blur-lg"
      >
        <h2 className="mb-6 text-4xl font-bold">Get in Touch</h2>
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-lg">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className={`rounded-md px-4 py-2 mt-1 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formErrors.name && "border-2 border-red-500"
              }`}
            />
            {formErrors.name && (
              <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-lg">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`rounded-md px-4 py-2 mt-1 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formErrors.email && "border-2 border-red-500"
              }`}
            />
            {formErrors.email && (
              <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-lg">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Write your message here"
              className={`rounded-md px-4 py-2 mt-1 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formErrors.message && "border-2 border-red-500"
              }`}
            ></textarea>
            {formErrors.message && (
              <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-3 mt-4 text-lg font-medium text-white transition duration-300 ease-in-out rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
      <h2
        data-aos="fade-up"
        className="mx-10 font-semibold text-blue-500 lg:my-4"
      >
        OR
      </h2>
      <div>
        <div
          data-aos="fade-up"
          className="p-6 bg-gray-800 rounded-lg shadow-lg bg-opacity-80 backdrop-filter backdrop-blur-lg"
        >
          <h3 className="mb-4 text-3xl font-bold text-blue-500">
            Contact Details
          </h3>
          <div className="grid grid-cols-1 gap-4 text-lg">
            <p className="flex items-center">
              <span className="mr-2 text-gray-400">
                <strong>Email:</strong>
              </span>{" "}
              <a
                href="mailto:secretofsk@gmail.com"
                target="_blank"
                rel='noreferrer'
                className="block ml-2 text-lg font-medium text-gray-100 hover:underline"
              >
                secretofsk@gmail.com
              </a>{" "}
            </p>
            <p className="flex items-center">
              <span className="mr-2 text-gray-400">
                <strong>Phone:</strong>
              </span>{" "}
              <a
                href="tel:+917062747786"
                target="_blank"
                rel='noreferrer'
                className="block ml-2 text-lg font-medium text-gray-100 hover:underline"
              >
                +91 7062747786
              </a>
            </p>
            <p className="flex items-center">
              <span className="mr-2 text-gray-400">
                <strong>Address:</strong>
              </span>{" "}
              Bikaner, Rajasthan, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
