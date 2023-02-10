import React, { useState } from 'react';

export const Form = ({ handleIncrementCount }) => {
	const [inputValue, setInputValue] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		handleIncrementCount(inputValue);
		setInputValue('');
	}

	function handleChange(event) {
		setInputValue(event.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				autoComplete='false'
				autoFocus
				className='input'
				onChange={handleChange}
				value={inputValue}
			/>
			<input type='submit' value='Submit' style={{ display: 'none' }} />
		</form>
	);
};
