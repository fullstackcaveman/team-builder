const Form = ({ values, update, submit }) => {
	const onChange = (e) => {
		const { name, value } = e.target;
		update(name, value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		submit();
		console.log('click');
	};

	return (
		<div className='form-container'>
			<form className='form-inputs' onSubmit={submitHandler}>
				<input
					type='text'
					name='name'
					value={values.name}
					onChange={onChange}
					placeholder='Member Name'
				/>
				<input
					type='email'
					name='email'
					value={values.email}
					onChange={onChange}
					placeholder='name@email.com'
				/>
				<select name='role' id='role' value={values.role} onChange={onChange}>
					<option value='default'>-- Select Role --</option>
					<option value='default'>Full-Stack Developer</option>
					<option value='default'>Front-End Developer</option>
					<option value='default'>Back-End Developer</option>
				</select>
				<div className='submit'>
					<button disabled={!values.name || !values.email || !values.role}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
