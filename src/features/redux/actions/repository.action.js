import axios from 'axios';
import {
	FIND_REPOSITORY_FAILURE,
	FIND_REPOSITORY_REQUEST,
	FIND_REPOSITORY_SUCCESS,
} from '../constants/repository.constant.js';

export const findAllRepository =
	(keyword, page, perPage) => async (dispatch) => {
		dispatch({ type: FIND_REPOSITORY_REQUEST });
		try {
			const { data } = await axios.get(
				`https://api.github.com/users/${keyword}/repos?page=${page}&per_page=${perPage}`
			);
			dispatch({ type: FIND_REPOSITORY_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: FIND_REPOSITORY_FAILURE, payload: error });
		}
	};
