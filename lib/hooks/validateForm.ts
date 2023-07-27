import { useState } from "react";

interface FormValues {
  id: string;
  name: string;
  email: string;
}

interface FormErrors {
  id: string;
  name: string;
  email: string;
}

const isValidEmail = (email: string) => {
  // Basic email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
type HookReturnValue = {
  formData: FormValues;
  errors: FormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validateForm: () => boolean;
};
const useFormValidation = (initialValues: FormValues): HookReturnValue => {
  const [formData, setFormData] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({
    id: "",
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    // Perform validation for each input field
    if (!formData.name || formData.name.length < 5) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }

    if (!formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (!formData) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      isValid = false;
    } else if (formData.id.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        id: "id must be at least 6 characters",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }

    return isValid;
  };

  return { formData, errors, handleChange, validateForm };
};

export default useFormValidation;
