import './header.scss';

import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { Popover } from '@headlessui/react';
import React from 'react';

const Header = () => {
	return (
		<Popover className='popover'>
			<div className='popover-container'>
				<div className='popover-container-wrapper'>
					<div className='logo'>
						<Link to='/'>
							<span className='sr-only'>Workflow</span>
							<GoMarkGithub size='36px' color='#eee' />
						</Link>
					</div>
				</div>
			</div>
		</Popover>
	);
};

export default Header;
