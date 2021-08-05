import React, { useState } from 'react'
import Input from './Input'
import ClickCounter from './ClickCounter'
import Container from './Container'
import ContainerMovie from './ContainerMovie'

const App = () => {
	const [value, setValue] = useState('')
	const handleChange = (e) => setValue(e.target.value)
	return (
		<>
			<ClickCounter />
			<Input defaultValue={value} onChange={handleChange} />
			<p>{value}</p>
			<Container />
			<ContainerMovie />
		</>
	)
}

export default App
