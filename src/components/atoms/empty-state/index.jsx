import React from 'react';

const EmptyState = (props) => {
	const { title, subtitle } = props;
	return (
		<>
			<h1 className='mt-4 grid justify-center mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
				{title}
			</h1>
			<p className='grid justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
				{subtitle}
			</p>
		</>
	);
};

export default EmptyState;
