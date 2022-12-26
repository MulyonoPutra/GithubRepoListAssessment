import { GoSearch } from 'react-icons/go';
import React from 'react';

const styles = {
	label: 'mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300',
	input: 'block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
	button: 'dark:bg-gray-700 text-white absolute right-2.5 bottom-0 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2',
};
const SearchBar = (props) => {
	return (
		<>
			<label className={styles.label}>Search</label>
			<div className='relative'>
				<input
					placeholder='Search Repository by Username'
					required
					type='text'
					spellCheck='false'
					onKeyPress={props.onKeyPress}
					onFocus={props.onFocus}
					ref={props.inputRef}
					style={{ width: '700px' }}
					className={styles.input}
				/>
				<button
					onClick={() => props.searchFunction()}
					className={styles.button}>
					<GoSearch size='36px' color='#eee' />
				</button>
			</div>
		</>
	);
};

export default SearchBar;
