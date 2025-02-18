import React from 'react'
import PageNav from '../../components/PageNav/PageNav'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import style from './Register.module.scss'
import LoginSignUp from '../LoginSignUp/LoginSignUp'

const Register: React.FC = () => {
	return (
		<div className={style.pageContainer}>
			<PageNav />
			<RegistrationForm className={style.RegistrationContainer} />
			<LoginSignUp/>
		</div>
	)
}

export default Register
