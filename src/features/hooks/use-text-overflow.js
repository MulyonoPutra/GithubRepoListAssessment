import { useEffect, useState } from 'react';

const useTextOverflow = (text, maxLength) => {
	const [overflow, setOverflow] = useState('...');

	useEffect(() => {
		if (text?.length > maxLength) {
			setOverflow(text.slice(0, maxLength) + '...');
		} else {
			setOverflow(text);
		}
	}, [maxLength, text]);
	return overflow;
};

export default useTextOverflow;
