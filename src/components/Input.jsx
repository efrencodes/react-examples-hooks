import React from 'react'

const Input = (props) => {
	const { defaultValue, onChange } = props
	return <input type="text" value={defaultValue} onChange={onChange} />
}

export default Input
