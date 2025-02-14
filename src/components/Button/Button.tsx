import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
	label: string
	onClick?: () => void
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, type = 'button' }) => {
	return (
		<button className={styles.button} type={type} onClick={onClick} disabled={disabled}>
			{label}
		</button>
	)
}

export default Button
