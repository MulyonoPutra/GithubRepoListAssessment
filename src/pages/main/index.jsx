import { Route, Routes } from 'react-router-dom';
import Home from '../home/index.jsx';
import Header from '../../components/molecules/header/index.jsx';

const Main = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
};

export default Main;
