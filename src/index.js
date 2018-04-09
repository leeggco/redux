import { createStore, combineReducers} from 'redux';

const postsReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_POST':
			return [
				...state,
				{ ...action.post }
			]
		default:
			return state
	}
}

const commentsReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_COMMENT':
			return [
				...state,
				{ ...action.comment }
			]
		default:
			return state
	}
}

// const mainReducer = (state = {}, action) => {
// 	return {
// 		posts: postsReducer(state.posts, action),
// 		comments: commentsReducer(state.comments, action)
// 	}
// }

const mainReducer = combineReducers({
	a: postsReducer,
	b: commentsReducer
})

const store = createStore(mainReducer);
const log = () => {
	console.log(store.getState())
}

store.subscribe(log)

store.dispatch({
	type: 'ADD_POST',
	post: {
		id: 1,
		title: 'welcome to CHINA!'
	}
})
store.dispatch({
	type: 'ADD_COMMENT',
	comment: {
		id: 1,
		postId: 1,
		title: 'Perfect!'
	}
})
store.dispatch({
	type: 'ADD_POST',
	post: {
		id: 2,
		title: 'welcome to GZ!'
	}
})
store.dispatch({
	type: 'ADD_COMMENT',
	comment: {
		id: 2,
		postId: 2,
		title: 'Wonderful!'
	}
})

// import { createStore } from 'redux';
//
// const counterReducer = (store = 0, action) => {
// 	switch(action.type) {
// 		case 'INCERMENT':
// 			return store + 1
// 		default:
// 			return store
// 	}
// }
//
// const store = createStore(counterReducer);
//
// const log = () => {
// 	console.log(store.getState())
// }
//
// store.subscribe(log)
//
// store.dispatch({
// 	type: 'INCERMENT'
// });
// store.dispatch({
// 	type: 'INCERMENT'
// });
