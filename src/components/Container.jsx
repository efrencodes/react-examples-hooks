import React, { useState, useEffect } from 'react'
import Welcome from './Welcome'

const Container = () => {
	const [name, setName] = useState('Efren')
	const [color, setColor] = useState('red')

	useEffect(() => {
		const handleSetData = (data) => {
			setName(data.name)
			setColor(data.color)
		}
		setTimeout(() => {
			const data = {
				name: 'Angelica',
				color: 'pink'
			}
			handleSetData(data)
		}, 4000)
	}, [])
	return <Welcome name={name} color={color} />
}

export default Container
