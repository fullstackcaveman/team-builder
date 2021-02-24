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
	const [formvalues, setFormValues] = useState(initialMembersValues);
	const [memberToEdit, setMemberToEdit] = useState([]);

	// console.log(teamMembers);

	const updateForm = (inputName, inputValue) => {
		setFormValues({ ...formvalues, [inputName]: inputValue });
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

		setTeamMembers(teamMembers.concat(newMember));
		// setTeamMembers([...teamMembers, newMember]);
		setFormValues(initialMembersValues);
	};

	const handleEditMember = (name, email, role) => {
		setMemberToEdit(name, email, role);
	};

	const editMember = (membertoedit) => {
		teamMembers.map((member) => {
			if (member === membertoedit) {
				setTeamMembers(...teamMembers, membertoedit);
			}
		});
	};

	return (
		<div className='App'>
			<div className='add-member'>
				<h2>ADD A TEAM MEMBER</h2>
				<div className='flex-column'>
					<Form
						values={formvalues}
						update={updateForm}
						submit={submitForm}
						setformvalues={setFormValues}
						membertoedit={memberToEdit}
						editmember={editMember}
					/>
				</div>
			</div>
			<div className='team-members'>
				<h2>TEAM MEMBERS</h2>
				{teamMembers.map((member) => {
					return (
						<Member
							key={member.name}
							details={member}
							editmember={handleEditMember}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
