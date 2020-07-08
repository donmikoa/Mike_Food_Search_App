import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
	const [query, setQuery] = useState('');
	const [recipes, setRecipes] = useState([]);
	const [alert, setAlert] = useState('');

	return (
		<div className='App'>
			<h1>Mike Food Search</h1>
			<form className='search-form'>
				<input
					type='text'
					name='query'
					value=''
					autoComplete='off'
					placeholder='Search Food'
				/>
			</form>
		</div>
	);
}

export default App;
