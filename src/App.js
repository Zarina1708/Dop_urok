import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import './App.css';
import {getUsers, usersSelect, loadSelect} from './redux/slices/usersSlice';
import {CircularProgress} from '@mui/material'

function App() {

  const dispatch = useDispatch()
  const users = useSelector(usersSelect)
  const load = useSelector(loadSelect)


  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  return (
    <div className="App">

      <ul>
        {
          load ? 
            users.map((user, key) =><li key={key}>{user.name}</li>) 
          :
          <CircularProgress />
        }
      </ul>
      

    </div>
  );
}

export default App;
