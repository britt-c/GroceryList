import React, { useState } from 'react';
	
	const App = ()=> {
		const [textareaValue, setTextareaValue] = useState("")
		const [items, setItems] = useState([])
		const listItems = items.map((item, i)=> <li key={i}>{item}</li>)
		const storeText = (event)=> {
			setTextareaValue(event.currentTarget.value)
		}

		const handleButtonClick = (event)=> {
			//add textareavalue to array
		}
		return (
			<div className="App">
				<header className="list-title">Grocery List</header>
				<textarea onChange={storeText}placeholder="What to get..."></textarea>
				<br/>
				<button onClick={handleButtonClick}>Add</button>
				<ul>{listItems}</ul>
			</div>
		);
	}

export default App;
