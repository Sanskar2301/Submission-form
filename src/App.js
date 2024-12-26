// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import "./App.css";
import { React, useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "male",
    subjects: {
      english: true,
      maths: false,
      physics: false,
    },
    resume: null,
    url: "",
    selectedOption: "",
    about: "",
  });

  const [submittedData, setSubmittedData] = useState(null); // To store submitted values

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        subjects: {
          ...prev.subjects,
          [name]: checked,
        },
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Store submitted data for display
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "male",
      subjects: {
        english: true,
        maths: false,
        physics: false,
      },
      resume: null,
      url: "",
      selectedOption: "",
      about: "",
    });
    setSubmittedData(null); // Clear submitted data
  };

  return (
    <div className="App">
      <h1>Submission Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            required
          />
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            required
          />
          <label htmlFor="email">Enter Email* </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter Mobile number"
            required
          />
          <label htmlFor="gender">Gender*</label>
          <input  
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
          />
          Other
          <label htmlFor="subjects">Your best Subject</label>
          <input
            type="checkbox"
            name="english"
            id="english"
            checked={formData.subjects.english}
            onChange={handleChange}
          />
          English
          <input
            type="checkbox"
            name="maths"
            id="maths"
            checked={formData.subjects.maths}
            onChange={handleChange}
          />
          Maths
          <input
            type="checkbox"
            name="physics"
            id="physics"
            checked={formData.subjects.physics}
            onChange={handleChange}
          />
          Physics
          <label htmlFor="file">Upload Resume*</label>
          <input
            type="file"
            name="resume"
            id="file"
            onChange={handleChange}
            required
          />
          <label htmlFor="url">Enter URL*</label>
          <input
            type="url"
            name="url"
            id="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Enter URL"
            required
          />
          <label>Select your choice</label>
          <select
            name="selectedOption"
            id="select"
            value={formData.selectedOption}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select your Ans
            </option>
            <optgroup label="Beginers">
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="React">React</option>
              <option value="Node">Node</option>
              <option value="Express">Express</option>
              <option value="MongoDB">MongoDB</option>
            </optgroup>
          </select>
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            value={formData.about}
            onChange={handleChange}
            placeholder="About yourself"
            required
          ></textarea>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </fieldset>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Submitted Data</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Contact: {submittedData.contact}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>
            Subjects:
            {Object.keys(submittedData.subjects)
              .filter((sub) => submittedData.subjects[sub])
              .join(", ")}
          </p>
          <p>Resume: {submittedData.resume?.name || "No file uploaded"}</p>
          <p>URL: {submittedData.url}</p>
          <p>Selected Option: {submittedData.selectedOption}</p>
          <p>About: {submittedData.about}</p>
        </div>
      )}
    </div>
  );
}

export default App;
