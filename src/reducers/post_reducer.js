import { FETCH_POSTS, FETCH_SPECIFIC_POST, DELETE_SPECIFIC_POST } from '../actions';

export default function(state={}, action){
	
	switch(action.type){
		case DELETE_SPECIFIC_POST:
			const id = action.payload
			delete state[id]
			return state;

		case FETCH_SPECIFIC_POST:
			const post = action.payload.data;
		 	return { ...state, [post.id]: post }

		case FETCH_POSTS:
			let newState = {}
			action.payload.data.forEach(post => { 
				  newState[post.id] = post
			})
			return newState;

		default:
			return state;
	}
} 