import React, { useState } from 'react';
	
	const App = ()=> {
		const [textareaValue, setTextareaValue] = useState("")
		const [items, setItems] = useState([])
		const listItems = items.map((item, i)=> (
			<li key={i}>
				<span>
					<input type="number" min="1" max="99" />
					{item} 
					<input type="checkbox" />
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
				<textarea onChange={storeText}placeholder="What to get..."></textarea>
				<br/>
				<button onClick={handleButtonClick}>Add</button>
				<ul>{listItems}</ul>
			</div>
		);
	}

export default App;
