import { useState } from 'react';
import './App.css';
import Member from './components/Member';
import MemberForm from './components/MemberForm';
import MembersList from './components/MembersList';

const initialMembersValues = {
	name: '',
	email: '',
	role: '',
};

function App() {
	const [teamMembers, setTeamMembers] = useState([
		{ name: 'Chris', email: 'chris@5upgraphics.com', role: 'admin' },
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
				<h2>ADD A MEMBER</h2>
				<MemberForm
					values={formvalues}
					update={updateForm}
					submit={submitForm}
				/>
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
