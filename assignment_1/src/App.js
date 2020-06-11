import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import * as actioncreators from './actioncreators';

function App() {
  const state = useSelector(state => ({
    thunkInfo: state.thunk
  }));
  
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(actioncreators.fetchUsers())
  }, [dispatch])

  const ListItem = state.thunkInfo.data.map(user => 
    <li key={user.id}>{user.title} - {user.body}</li>
  )

  return (
    <div className="App">
      <header className="App-header">
        { state.thunkInfo.loading && <span>Loading users...</span>}

        {
          <ul>
            {!state.thunkInfo.loading && ListItem}
          </ul>
        }
      </header>
    </div>
  );
}

export default App;
