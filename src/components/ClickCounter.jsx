import React, { useState } from 'react'

const ClickCounter = () => {
	const [counter, setCounter] = useState(10)
	const handleClick = () => setCounter(counter + 1)
	return (
		<div>
			<p>You have clicked {counter} times</p>
			<button onClick={handleClick}>Click +</button>
		</div>
	)
}

export default ClickCounter
