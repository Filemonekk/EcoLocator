import Button from '../Button/Button'
import styles from './RegistrationForm.module.scss';


const RegistrationForm = () => {
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

export default RegistrationForm