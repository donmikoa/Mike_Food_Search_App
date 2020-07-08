import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
	const [query, setQuery] = useState('');
	const [recipes, setRecipes] = useState([]);
	const [alert, setAlert] = useState('');

	const APP_ID = 'f659709c';
	const APP_KEY = 'd95fc3252840382a96c07bd438e73183';

	const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

	const getData = async () => {
		const result = await Axios.get(url);

		console.log(result);
	};

	return (
		<div className='App'>
			<h1 onClick={getData}>Mike Food Search</h1>
			<form className='search-form'>
				<input
					type='text'
					name='query'
					value=''
					autoComplete='off'
					placeholder='Search Food'
				/>
				<input type='submit' value='Search' />
			</form>
			<div>The Recipies</div>

      
		</div>
	);
}

export default App;
