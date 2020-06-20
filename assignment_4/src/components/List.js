import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as actioncreators from '../actioncreators';
import { Post } from './Post';
import PostWrapper from './styled-components/postWrapper';

const List = () => {
    const state = useSelector(state => ({
        postInfo: state.posts
    }));
      
    const dispatch  = useDispatch();
    
    useEffect(() => {
        dispatch(actioncreators.fetchPosts())
    }, [dispatch]);

    const PostList = state.postInfo.data.map(post => 
        <PostWrapper key={post.id}>
            <Post key={post.id} post={post} />    
        </PostWrapper>
    );

    return (
        <div className="post-list">
            { state.postInfo.loading && <span>Loading posts...</span> }
            { state.postInfo.error && <span>Unable to load posts!</span> }

            { !state.postInfo.loading && PostList }

            
        </div>
    );
}

export default List;

