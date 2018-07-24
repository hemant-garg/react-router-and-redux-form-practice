import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_SPECIFIC_POST = 'FETCH_SPECIFIC_POST';
export const DELETE_SPECIFIC_POST = 'DELETE_SPECIFIC_POST';
export const HOME_URL = '/react-router-and-redux-form-practice';

const API_KEY = '?key=bjhbjs8dc90934';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';


export function fetchPosts(){
	const URL =	`${ROOT_URL}posts${API_KEY}`;
	const req = axios.get(URL);
	return {
		type: FETCH_POSTS,
		payload: req
	}
}

export function createPost(values, callback){
	const URL =	`${ROOT_URL}posts${API_KEY}`;
	const req = axios.post(URL, values).then(() => callback());
	return {
		type: CREATE_POST,
		payload: req
	}
}

export function fetchSpecificPost(id){
	const URL =	`${ROOT_URL}posts/${id}${API_KEY}`;
	const req = axios.get(URL);
	return {
		type: FETCH_SPECIFIC_POST,
		payload: req
	}
}

export function deletePost(id, callback){
	const URL =	`${ROOT_URL}posts/${id}${API_KEY}`;
	axios.delete(URL).then(() => callback());
	return {
		type: DELETE_SPECIFIC_POST,
		payload: id
	}
}