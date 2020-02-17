import React, { useState } from 'react';
import './App.css';

	const App = ()=> {
		const [textareaValue, setTextareaValue] = useState("")
		const [items, setItems] = useState([])
		const listItems = items.map((item, i)=> (
			<li key={i}>
				<span>
					<span className="list-item">{item}</span> 
					<input type="checkbox" />
					<br />
					<label htmlFor="quantity">Quantity</label><br />
					<input placeholder="0" type="number" min="1" max="99" />
				</span>
			</li>
		))
			
		const storeText = (event)=> {
			setTextareaValue(event.currentTarget.value)
		}


		const handleButtonClick = (event)=> {
			setItems([...items, textareaValue])
		}

		return (
			<div className="App">
				<header className="list-title">Grocery List</header>
				<br />
				<input onChange={storeText} placeholder="What to get..." />
				<br/>
				<button onClick={handleButtonClick}>Add</button>
				<ul>{listItems}</ul>

			</div>
		);
	}

export default App;
