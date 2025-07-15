import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    jobTitle: "",
    diagnosisDate: "",
    diagnosisType: "",
    story: "",
    agreeToTerms: false,
    humanCheck: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "phone",
      "email",
      "dob",
      "jobTitle",
      "diagnosisDate",
      "diagnosisType",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = "Required";
    });

    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree";
    if (!formData.humanCheck) newErrors.humanCheck = "Please verify";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form is valid — ready to submit.");
    }
  };

  return (
    <div className="p-6 w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="bg-[#2E4A7DAB] rounded-2xl  text-white shadow-xl px-5 py-15 max-w-2xl mx-auto text-sm md:text-base "
      >
        <h2 className="text-xl font-bold mb-4">Claim Form</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="firstName"
            label="First name *"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <Input
            name="lastName"
            label="Last name *"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
          <Input
            name="phone"
            label="Phone number *"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <Input
            name="email"
            label="Email ID *"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            name="dob"
            label="Date of birth *"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            error={errors.dob}
          />
          <Input
            name="jobTitle"
            label="Job title *"
            value={formData.jobTitle}
            onChange={handleChange}
            error={errors.jobTitle}
          />

          <Input
            name="diagnosisDate"
            label="Date of diagnosis *"
            type="date"
            value={formData.diagnosisDate}
            onChange={handleChange}
            error={errors.diagnosisDate}
          />

          <Input
            name="diagnosisType"
            label="Type of diagnosis *"
            value={formData.diagnosisType}
            onChange={handleChange}
            error={errors.diagnosisType}
          />
        </div>

        <div className="mt-4">
          <textarea
            name="story"
            value={formData.story}
            onChange={handleChange}
            placeholder="Tell us your story (optional)"
            className="w-full border-0 border-b-2 border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="1"
          />
        </div>

        <Checkbox
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          label={
            <>
              I agree to the{" "}
              <a className="text-white underline" href="#">
                privacy policy
              </a>{" "}
              and{" "}
              <a className="text-white underline" href="#">
                disclaimer
              </a>{" "}
              and give my express written consent to be contacted regarding my
              case options. I understand that I may be contacted using automatic
              dialing equipment. Message and data rates may apply. My consent
              does not require purchase. This is Legal advertising.
            </>
          }
          error={errors.agreeToTerms}
        />

        <Checkbox
          name="humanCheck"
          checked={formData.humanCheck}
          onChange={handleChange}
          label="Please check this box to verify you're a person."
          error={errors.humanCheck}
        />

        <button
          type="submit"
          className="font-semibold text-xl text-gray-950  bg-[#F5E7DA] px-6 py-2 rounded-xl w-full mt-5 border-0"
        >
          Start your claim now
        </button>
      </form>
    </div>
  );
};

const Input = ({ name, label, value, onChange, type = "text", error }) => (
  <div>
    <input
      name={name}
      type={type}
      placeholder={label}
      value={value}
      onChange={onChange}
      className={`w-full border-0 border-b-2 placeholder:text-gray-300 border-gray-300 py-2 bg-transparent focus:outline-none focus:border-white ${
        type === "date" ? "date-input" : ""
      }`}
    />
    {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
  </div>
);

const Checkbox = ({ name, checked, onChange, label, error }) => (
  <div className="mt-4 text-sm text-white">
    <label className="flex items-start gap-3 relative cursor-pointer">
      {/* Checkbox container */}
      <span className="relative inline-block w-4 h-4">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="appearance-none w-4 h-4 border-2 border-white rounded-sm bg-transparent cursor-pointer"
        />
        {/* Large colorful checkmark */}
        {checked && (
          <FaCheck className="absolute text-green-400 text-2xl -top-1  z-10 pointer-events-none drop-shadow-lg" />
        )}
      </span>

      {/* Label */}
      <span className="leading-snug">{label}</span>
    </label>

    {error && <div className="text-red-500 text-xs">{error}</div>}
  </div>
);

export default ClaimForm;
