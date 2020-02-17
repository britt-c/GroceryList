import React, { useState } from 'react';
import './App.css';

	const App = ()=> {
		const [textareaValue, setTextareaValue] = useState("")
		const [items, setItems] = useState([])
		const listItems = items.map((item, i)=> (
			<li key={i}>
				<span className="item">
					<span id="listItem">{item}</span> 
					<input type="checkbox" />
					<br />
					<label htmlFor="item-quantity">Quantity</label><br />
					<input id="quanBtn" placeholder="0" type="number" min="1" max="99" />
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
				<header id="listTitle">Grocery List</header>
				<br />
				<input id="itemEntryBar" onChange={storeText} placeholder="What to get..." />
				<button id="addBtn" onClick={handleButtonClick}>Add</button>
				<ul>{listItems}</ul>

			</div>
		);
	}

export default App;
