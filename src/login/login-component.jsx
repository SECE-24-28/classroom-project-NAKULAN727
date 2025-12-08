import React, { useState } from "react";
import { styles } from "./login-style";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

// ----------------------------------------------------------------------------
// Reusable Helper Components (Optimization: Props driven & Modular)
// ----------------------------------------------------------------------------

const FormRow = ({ children }) => <div style={styles.formRow}>{children}</div>;

const FormInput = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  style,
}) => (
  <div style={styles.inputGroup}>
    <label style={styles.label}>{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      style={{ ...styles.inputField, ...style }}
      value={value}
      onChange={onChange}
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, options }) => (
  <div style={styles.inputGroup}>
    <label style={styles.label}>{label}</label>
    <select
      name={name}
      style={styles.inputField}
      value={value}
      onChange={onChange}
    >
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

// Optimization: Encapsulated UI state for password visibility
const PasswordInput = ({ label, name, value, onChange, placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <div style={styles.inputGroup}>
      <label style={styles.label}>{label}</label>
      <div style={styles.passwordWrapper}>
        <FaLock style={styles.inputIconLeft} />
        <input
          type={show ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          style={styles.passwordInput}
          value={value}
          onChange={onChange}
        />
        <div style={styles.togglePassword} onClick={() => setShow(!show)}>
          {show ? <FaEyeSlash /> : <FaEye />} Show
        </div>
      </div>
    </div>
  );
};

// Optimization: Complex input group extracted
const MobileInput = ({
  label,
  codeName,
  codeValue,
  numberName,
  numberValue,
  onChange,
}) => (
  <div style={styles.inputGroup}>
    <label style={styles.label}>{label}</label>
    <div style={styles.mobileInputContainer}>
      <select
        name={codeName}
        style={styles.mobileCodeSelect}
        value={codeValue}
        onChange={onChange}
      >
        <option value="IND">IND</option>
        <option value="USA">USA</option>
      </select>
      <input
        type="tel"
        name={numberName}
        placeholder="Enter Mobile number"
        style={styles.mobileInput}
        value={numberValue}
        onChange={onChange}
      />
    </div>
  </div>
);

// ----------------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------------

const LoginComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    college: "",
    passoutYear: "",
    department: "",
    degree: "",
    email: "",
    mobileCode: "IND",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.headerText}>
        <h2 style={styles.titleWelcome}>Welcome to</h2>
        <h1 style={styles.titleMain}>
          Aptitude Guru Hem <span style={styles.highlight}>LMS</span>
        </h1>
      </div>

      <div style={styles.formBox}>
        {/* Row 1: Names */}
        <FormRow>
          <FormInput
            label="First Name"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <FormInput
            label="Last Name"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormRow>

        {/* Row 2: College & Year */}
        <FormRow>
          <FormSelect
            label="Select College"
            name="college"
            value={formData.college}
            onChange={handleChange}
            options={[
              { value: "", label: "AGH B2C" },
              { value: "ABC College", label: "ABC College" },
              { value: "XYZ University", label: "XYZ University" },
            ]}
          />
          <FormSelect
            label="Select Passout Year"
            name="passoutYear"
            value={formData.passoutYear}
            onChange={handleChange}
            options={[
              { value: "", label: "2024" },
              { value: "2023", label: "2023" },
              { value: "2025", label: "2025" },
            ]}
          />
        </FormRow>

        {/* Row 3: Department & Degree */}
        <FormRow>
          <FormSelect
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            options={[
              { value: "", label: "CSE" },
              { value: "ECE", label: "ECE" },
              { value: "MECH", label: "MECH" },
            ]}
          />
          <FormSelect
            label="Ug or Pg"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            options={[
              { value: "", label: "UG" },
              { value: "PG", label: "PG" },
            ]}
          />
        </FormRow>

        {/* Row 4: Email & Mobile */}
        <FormRow>
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />
          <MobileInput
            label="Mobile"
            codeName="mobileCode"
            codeValue={formData.mobileCode}
            numberName="mobile"
            numberValue={formData.mobile}
            onChange={handleChange}
          />
        </FormRow>

        {/* Row 5: Passwords */}
        <FormRow>
          <PasswordInput
            label="Password"
            name="password"
            placeholder="Enter the password"
            value={formData.password}
            onChange={handleChange}
          />
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Enter the confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </FormRow>

        {/* Password Rules (Static display) */}
        <div style={styles.passwordRules}>
          <div style={styles.ruleItem}>• minimun 8 character</div>
          <div style={styles.ruleItem}>• one lowercase character</div>
          <div style={styles.ruleItem}>• one special character</div>
          <div style={styles.ruleItem}>• one uppercase character</div>
          <div style={styles.ruleItem}>• one number</div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.submitBtnWrapper}>
        <button style={styles.submitBtn} onClick={handleSubmit}>
          Submit
        </button>
        <div style={styles.loginLink}>
          Already have an Account Go to{" "}
          <a href="/login" style={styles.linkAnchor}>
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
