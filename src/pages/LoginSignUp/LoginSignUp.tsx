import React, { useState } from 'react'
import styles from './LoginSignUp.module.scss'

type ActionType = 'Sign Up' | 'Login';

const LoginSignUp: React.FC = () => {
	const [action, setAction] = useState<ActionType>('Sign Up');

	return (
		<div className={styles.container}>
			<div className={styles.header}>
                <div className={styles.text}>{action}</div>
			</div>
            <div className={styles.inputs}>
                {action === 'Sign Up' && (
                    <div className={styles.input}>
                        <img src='./img/person.png' alt='User Icon' />
                        <input type='text' placeholder='Name' />
                    </div>)}
				<div className={styles.input}>
					<img src='./img/email.png' alt='' />
					<input type='email' placeholder='Email' />
				</div>
				<div className={styles.input}>
					<img src='./img/password.png' alt='' />
					<input type='password' placeholder='Password' />
				</div>
			</div>
			<div className={styles.forgotPassword}>
				{' '}
				Lost Password?<span> Click Here</span>
			</div>
			<div className={styles.submitContainer}>
				<div
					className={`${styles.submit} ${action === 'Sign Up' ? styles.gray : ''}`}
					onClick={() => setAction('Sign Up')}>
					Sign Up
				</div>
				<div className={`${styles.submit} ${action === 'Login' ? styles.gray : ''}`} onClick={() => setAction('Login')}>
					Login
				</div>
			</div>
		</div>
	)
}

export default LoginSignUp
