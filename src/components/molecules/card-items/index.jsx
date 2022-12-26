import React from 'react';
import './card-item.scss';
import moment from 'moment';
import copyIcon from '../../../assets/copy.svg';
import useTextOverflow from '../../../features/hooks/use-text-overflow.js';

const CardItems = (props) => {
	const { user, title, description, updated, clone, language } = props;

	const desc = useTextOverflow(description, 30);
	const titles = useTextOverflow(title, 20);
	const updatedAt = moment(updated).format('LLL');

	const copyClipBoard = () => {
		navigator.clipboard.writeText(clone);
	};

	return (
		<div className='card'>
			<img
				src={copyIcon}
				alt='Clone Url'
				height={23}
				width={23}
				onClick={() => copyClipBoard()}
				className='clipboard'
			/>
			<span className='hide'>Clone</span>
			<h5 className='title'>{titles}</h5>
			<p className='desc'>{desc}</p>
			<p className='desc'>{language}</p>
			<div className='grid grid-cols-6 gap-4 dark:bg-gray-600 absolute bottom-0'>
				<p className='updated col-start-1 col-end-3'>{updatedAt}</p>
				<p className='updated col-end-7 col-span-2'>{user}</p>
			</div>
		</div>
	);
};

export default CardItems;
