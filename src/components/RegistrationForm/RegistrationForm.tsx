import Button from '../Button/Button'
import styles from './RegistrationForm.module.scss';


{/*const RegistrationForm = () => {
    return (
      
      <form className={styles.formStyle}>
          <div >
              <label htmlFor='email'>E-mail</label>
              <input id='email' type='email'/>
          </div>
          <div>
              <label htmlFor='password'>Password</label>
              <input id='password' type='password'/>
          </div>
          <Button label='Send' type='submit'/>
            </form>
           
  )
}

export default RegistrationForm*/}

interface RegistrationFormProps {
  className?: string; // Opcjonalny className
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ className }) => {
  return (
    <form className={styles.formStyle}>
      <label>Company name</label>
      <input type='text' name='companyName' />
      <label>Company ID</label>
      <input type='number' name='companyId' />
      <label>City</label>
      <input type='text' name='city' />
      <label>Zip-Code</label>
      <input type='number' name='ZipCode' />
      <label>Password</label>
      <input type='password' name='registrationPassword' />
      <label>Confirm Password</label>
      <input type='password' name='confirmRegistrationPassword'/>
      <Button label='Register' />
      
      
    </form>
  )
}

export default RegistrationForm