import { Form } from './Form';
import randomWord from 'random-words';
import { useEffect, useState } from 'react';

function TypingTestApp() {
	const [word, setWord] = useState(randomWord());
	const [count, setCount] = useState(0);
	const [time, setTime] = useState(60);

	useEffect(() => {
		if (time > 0) {
			const timer = setTimeout(() => {
				setTime(time - 1);
			}, 1000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [time]);

	function handleReset() {
		setTime(60);
		setWord(randomWord());
		setCount(0);
	}

	function handleIncrementCount(inputValue) {
		if (inputValue.trim() === word) {
			setCount(count + word.length);
			setWord(randomWord());
		}
	}

	return (
		<div className='container'>
			<h1 className='word'>{word}</h1>
			<h2 className='count'>characters typed: {count}</h2>
			{time > 0 ? (
				<>
					<h4 className='time'>⌛ {time} seconds </h4>
					<Form handleIncrementCount={handleIncrementCount} />
				</>
			) : (
				<>
					<h4 className='time'>GAME OVER</h4>
					<button className='play' onClick={handleReset}>
						Play Again
					</button>
				</>
			)}
		</div>
	);
}

export default TypingTestApp;
