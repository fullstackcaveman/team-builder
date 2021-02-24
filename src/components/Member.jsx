const Member = (props) => {
	const { details, editmember } = props;
	const { name, email, role } = details;

	const editSubmitHandler = (e) => {
		e.preventDefault();
		editmember({ name: name, email: email, role: role });
	};

	if (!details) {
		return <h3>Fetching Members...</h3>;
	}

	return (
		<div className='member-container' onClick={editSubmitHandler}>
			<div className='details'>
				<h2>{name}</h2>
				<p>Email: {email}</p>
				<p>Role: {role}</p>
			</div>
			<div className='edit-details'>
				<button>EDIT</button>
			</div>
		</div>
	);
};

export default Member;
