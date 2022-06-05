import React, { useState } from 'react';

type FormType = {
	handleClick: (email: string, password: string) => void,
	title: string
};

function Form({ handleClick, title }: FormType) {

	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')


	return (
		<div>
			<input type='email'
				value={email}
				onChange={((e) => setEmail(e.currentTarget.value))}
				placeholder='email'
				name='email'
			/>
			<input
				name='password'
				type='password'
				value={pass}
				onChange={(e) => setPass(e.currentTarget.value)}
				placeholder='password'
			/>
			<button onClick={() => handleClick(email, pass)}>{title}</button >
		</div>
	);
}

export default Form;