import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PostItem = ({ entity, onClickDeleteButton }) => {
    return (
        <div>
            <h3>{entity.title}</h3>
            <button onClick={onClickDeleteButton} style={{border: '1px solid #ddd'}}>DELETE</button>
        </div>
    )
}

// 创建展示组件
const PostList = ({entities, onClickDeleteButton})=> {
    const items = entities.map((item) => {
        return <PostItem
            key= {item.id}
            entity= {item}
            onClickDeleteButton = {()=> {
                onClickDeleteButton(item.id)
            }}
        />
    })
    return (
        <div>{ items }</div>
    )
}

// 使用connect创建react组件 ⬇
const mapStateToProps = (state) => {
    return {
        entities: state.posts
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickDeleteButton: (id) => {
            dispatch({
                type: 'DELETE_POST',
                id: id
            })
        }
    }
}

const Posts = connect(mapStateToProps, mapDispatchToProps)(PostList);
export default Posts;

// 普通方式创建react组件 ⬇
// export default class Posts extends Component {
//     static contextTypes = {
//         store: PropTypes.object
//     }

//     constructor(props, context) {
//         super(props);
        
//         console.log('Context:', context);
//         console.log('State:', context.store.getState());

//         this.store = context.store;
//         this.unsubscribe = this.store.subscribe(()=> this.forceUpdate());
//     }

//     componentWillUnmount(){
//         this.unsubscribe();
//     }
    
//     onClickDeleteButton = (id) => {
//         this.store.dispatch({
//             type: 'DELETE_POST',
//             id: id
//         })
//     }

//     render(){
//         const entities = this.store.getState().posts;
//         return (
//             <PostList 
//                 entities = {entities} 
//                 onClickDeleteButton = {this.onClickDeleteButton}
//             />
//         )
//     }
// }