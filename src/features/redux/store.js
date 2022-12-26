import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import repositoryReducer from './reducers/repository.reducer.js';

const initialState = {};

const reducer = combineReducers({
	repository: repositoryReducer,
});

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
