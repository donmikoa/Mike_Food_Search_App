import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
	const [query, setQuery] = useState('');
	const [recipes, setRecipes] = useState([]);
	const [alert, setAlert] = useState('');

	return <div>Mike Foods</div>;
}

export default App;
