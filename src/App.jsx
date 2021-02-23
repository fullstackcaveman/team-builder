import { useState } from 'react';
import './App.css';
import Member from './components/Member';
import Form from './components/Form';

const initialMembersValues = {
	name: '',
	email: '',
	role: '',
};

function App() {
	const [teamMembers, setTeamMembers] = useState([
		{
			name: 'Chris Burton',
			email: 'chris@fullstackcaveman.com',
			role: 'Full-Stack Developer',
		},
	]);
	const [formvalues, setForValues] = useState(initialMembersValues);

	console.log(teamMembers);

	const updateForm = (inputName, inputValue) => {
		setForValues({ ...formvalues, [inputName]: inputValue });
	};

	const submitForm = () => {
		const newMember = {
			name: formvalues.name.trim(),
			email: formvalues.email.trim(),
			role: formvalues.role.trim(),
		};

		if (!newMember.name || !newMember.email || !newMember.role) {
			return;
		}

		setTeamMembers([...teamMembers, newMember]);
	};

	return (
		<div className='App'>
			<div className='add-member'>
				<h2>ADD A TEAM MEMBER</h2>
				<div className='flex-column'>
					<Form values={formvalues} update={updateForm} submit={submitForm} />
				</div>
			</div>
			<div className='team-members'>
				<h2>TEAM MEMBERS</h2>
				{teamMembers.map((member) => {
					return <Member key={member.name} details={member} />;
				})}
			</div>
		</div>
	);
}

export default App;
