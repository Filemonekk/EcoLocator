import styles from './Map.module.scss'

import React from 'react'

interface Props {
	titlemap: string
}

const Map: React.FC<Props> = ({ titlemap }) => {
	return <h1 className={styles.titlemap}>{titlemap}</h1>
}

export default Map
