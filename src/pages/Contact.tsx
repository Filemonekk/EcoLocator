import PageNav from '../components/PageNav/PageNav'

import React, { useState } from "react";
import styles from "./Contact.module.scss";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(formState.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formState);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

	return (<>
	  <PageNav/>
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>

      {isSubmitted && (
        <div className={styles.successMessage}>
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.name ? styles.errorInput : ""}`}
          />
          {errors.name && <p className={styles.errorText}>{errors.name}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.email ? styles.errorInput : ""}`}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            rows={4}
            className={`${styles.textarea} ${errors.message ? styles.errorInput : ""}`}
          />
          {errors.message && (
            <p className={styles.errorText}>{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
        >
          Send Message
        </button>
      </form>
		</div>
		</>
  );
};

export default Contact;