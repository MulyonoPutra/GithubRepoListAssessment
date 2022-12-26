import {
	FIND_REPOSITORY_FAILURE,
	FIND_REPOSITORY_REQUEST,
	FIND_REPOSITORY_SUCCESS,
} from '../constants/repository.constant.js';

const initialState = [];

export const repositoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case FIND_REPOSITORY_REQUEST:
			return {
				isLoading: true,
			};
		case FIND_REPOSITORY_SUCCESS:
			return {
				isLoading: false,
				collections: action.payload,
			};
		case FIND_REPOSITORY_FAILURE:
			return {
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default repositoryReducer;
