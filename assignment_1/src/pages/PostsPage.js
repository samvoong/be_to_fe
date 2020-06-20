import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import * as actioncreators from '../actioncreators';

import { Post } from '../components/Post'

const PostsPage = () => {
  const state = useSelector(state => ({
    thunkInfo: state.thunk
  }));
  
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(actioncreators.fetchPosts())
  }, [dispatch])

  const ListItem = state.thunkInfo.data.map(post => 
    <Post key={post.id} post={post} excerpt />
  )

  return (
    <div className="App">
      <header className="App-header">
        { state.thunkInfo.loading && <span>Loading posts...</span>}
        { state.thunkInfo.error && <span>Unable to load posts!</span>}
        {
          <ul>
            {!state.thunkInfo.loading && ListItem}
          </ul>
        }
      </header>
    </div>
  );
}

export default (PostsPage)
