import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import React from 'react';
import Main from '../../pages/main/index.jsx';

const PageRoute = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='*' element={<Main />} />
				</Routes>
			</Router>
		</>
	);
};

export default PageRoute;
