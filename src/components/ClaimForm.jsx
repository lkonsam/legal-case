import React, { useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import Checkbox from "./Checkbox";
import Input from "./Input";

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
    <div className="w-full bg-[#2E4A7DAB] rounded-4xl  text-white shadow-xl px-5 py-15 text-sm md:text-base ">
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl font-semibold text-white mb-4 scale-y-110">
          Claim Form
        </h2>
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
          label={
            <>
              Please check this box to verify you're a <br />
              person.
            </>
          }
          error={errors.humanCheck}
        />

        <button
          type="submit"
          className="font-semibold text-xl text-gray-950  bg-[#F5E7DA] px-6 py-2 mb-5 rounded-xl w-full mt-5 border-0"
        >
          <span className="hidden lg:block">Start your claim now</span>
          <span className="lg:hidden flex items-center justify-center gap-2">
            Submit <FaArrowRight />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ClaimForm;
