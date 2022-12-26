import './App.css';
import React from 'react';
import PageRoute from './features/routes/index.jsx';
import { Provider } from 'react-redux';
import store from './features/redux/store.js';

function App() {
	return (
		<Provider store={store}>
			<PageRoute />
		</Provider>
	);
}

export default App;
