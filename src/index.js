import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducers';
import App from './components/App'

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

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

// import { createStore } from 'redux';
//
// const counterReducer = (state = 0, action) => {
// 	switch(action.type) {
// 		case 'INCERMENT':
// 			return state + 1
// 		default:
// 			return state
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
