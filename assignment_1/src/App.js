import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import * as actioncreators from './actioncreators';
import RouteConfig from './Route'

function App() {
  const state = useSelector(state => ({
    thunkInfo: state.thunk
  }));
  
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(actioncreators.fetchPosts())
  }, [dispatch])

  const ListItem = state.thunkInfo.data.map(post => 
    <li key={post.id}>{post.title} - {post.body}</li>
  )

  return (
    <div className="App">
      <header className="App-header">
        <RouteConfig />
      </header>
    </div>
  );
}

export default App;
