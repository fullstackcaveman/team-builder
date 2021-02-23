const MemberForm = ({ name, email, role }) => {
	const submitHandler = (e) => {
		e.preventDefault();
		// submit()
		console.log('click');
	};

	return (
		<div>
			<form className='form-container' onSubmit={submitHandler}>
				<input type='text' name='name' />
				<input type='email' name='email' />
				<select name='role' id='role'>
					<option value='default'>-- Please Select --</option>
				</select>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default MemberForm;
