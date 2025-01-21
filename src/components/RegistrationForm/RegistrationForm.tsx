import { useState } from 'react';
import Button from '../Button/Button'
import styles from './RegistrationForm.module.scss';

interface RegistrationFormProps {
  className?: string; // Opcjonalny className
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyId: '',
    city: '',
    zipCode: '',
    registrationPassword: '',
    confirmRegistrationPassword: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Wysłane dane:", formData);
    if (formData.registrationPassword !== formData.confirmRegistrationPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Zarejestrowano użytkownika: ${formData.companyName}`);
  };



  return (
    <form onSubmit={handleSubmit} className={styles.formStyle}>
      <label>Company name</label>
      <input type='text' name='companyName' value={formData.companyName} onChange={handleInputChange} />
      <label>Company ID</label>
      <input type='number' name='companyId' value={formData.companyId} onChange={handleInputChange} />
      <label>City</label>
      <input type='text' name='city' value={formData.city} onChange={handleInputChange} />
      <label>Zip-Code</label>
      <input type='number' name='zipCode' value={formData.zipCode} onChange={handleInputChange} />
      <label>Password</label>
      <input type='password' name='registrationPassword' value={formData.registrationPassword} onChange={handleInputChange} />
      <label>Confirm Password</label>
      <input type='password' name='confirmRegistrationPassword' value={formData.confirmRegistrationPassword} onChange={handleInputChange} />
      <Button type='submit' label='Register' />

    </form>
  )
}

export default RegistrationForm