import { useState } from 'react';
import Card from './components/card/Card';
import { USERS } from './constants/users';

const App = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<div>
				<Card {...USERS[counter]}></Card>
			</div>
			<div>
				<button
					disabled={counter <= 0}
					onClick={() => buttonPrev(counter, setCounter)}
				>
					prev
				</button>
				<button
					disabled={counter >= USERS.length - 1}
					onClick={() => buttonNext(counter, setCounter)}
				>
					next
				</button>
			</div>
		</>
	);
};
const buttonPrev = (counter, setCounter) => {
	setCounter(counter - 1);
};
const buttonNext = (counter, setCounter) => {
	setCounter(counter + 1);
};

export default App;

/* 
const [filteredName, setFilteredName] = useState();
	
	console.log(filteredName);
	return (
		<>
			<div>
				<input
					type='text'
					onChange={event => findName(event.target.value, setFilteredName)}
				/>
			</div>
			<div>
				{USERS.map(user => {
					return <Card key={user.userId} {...user} />;
				})}
			</div>
		</>
	);
};
const findName = (event, setFilteredName) => {
	setFilteredName(event);
	console.log(event); */
