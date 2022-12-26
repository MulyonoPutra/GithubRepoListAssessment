import React, { useRef } from 'react';
import { CardItems, EmptyState, SearchBar } from '../../components/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { findAllRepository } from '../../features/redux/actions/repository.action.js';

const Home = () => {
	const dispatch = useDispatch();

	const data = useSelector((state) => state.repository);
	const { collections } = data;

	const inputElement = useRef(null);

	const page = 1;
	const perPage = 100;

	const handleEnterKey = () => {
		const ENTER = 13;
		if (window.event.keyCode === ENTER) {
			search();
			inputElement.current.blur();
		}
	};

	const search = () => {
		dispatch(findAllRepository(inputElement.current.value, page, perPage));
	};

	const selectText = () => {
		inputElement.current.select();
	};

	return (
		<>
			<div className='grid justify-center mt-4'>
				<SearchBar
					onKeyPress={handleEnterKey}
					onFocus={selectText}
					searchFunction={search}
					inputRef={inputElement}
				/>
			</div>
			{collections?.length > 0 ? (
				<div className='grid grid-cols-4 gap-4 p-4'>
					{collections?.map((props) => {
						return (
							<CardItems
								key={props.id}
								title={props.name}
								user={props.owner.login}
								description={props.description}
								language={props.language}
								updated={props.updated_at}
								clone={props.clone_url}
							/>
						);
					})}
				</div>
			) : (
				<EmptyState
					title='No Result Found!'
					subtitle='Please enter correct repository username'
				/>
			)}
		</>
	);
};

export default Home;
