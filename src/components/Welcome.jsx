import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/Welcome.scss'

const Welcome = (props) => {
	const { color, name } = props
	return <h1 className={color}>Welcome, {name}</h1>
}

Welcome.propTypes = {
	color: PropTypes.string,
	name: PropTypes.string
}

export default Welcome
