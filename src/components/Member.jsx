const Member = ({ details }) => {
	if (!details) {
		return <h3>Fetching Members...</h3>;
	}

	return (
		<div className='member-container'>
			<div className='details'>
				<h2>{details.name}</h2>
				<p>Email: {details.email}</p>
				<p>Role: {details.role}</p>
			</div>
			<div className='edit-details'>{/* <button>EDIT</button> */}</div>
		</div>
	);
};

export default Member;
