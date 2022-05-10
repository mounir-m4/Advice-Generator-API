import { useState, useEffect } from 'react';
import Pattern from './Pattern';
import Spinner from './Spinner';
const AdviceItem = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setData(null);
		setLoading(true);
		try {
			//Note: Advice is cached for 2 seconds. Any repeat-request within 2 seconds will return the same piece of advice.
			const res = await fetch('https://api.adviceslip.com/advice');
			const data = await res.json();
			setData(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	const onCLick = () => {
		fetchData();
	};
	if (loading) {
		return <Spinner />;
	}
	return (
		<div className='advice-box'>
			<small className='advice-number'>Advice #{data.slip.id}</small>
			<blockquote className='advice-text'>{data.slip.advice}</blockquote>
			<Pattern />
			<button className='dice-button' onClick={onCLick}>
				<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z'
						fill='#202733'
					/>
				</svg>
			</button>
		</div>
	);
};

export default AdviceItem;
