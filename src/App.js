import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import People from './People'
import { Grid } from '@material-ui/core';

function App() {


  const [user, setUser] = React.useState([])


  useEffect(() => {
    const fetchData = () => {
      fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => setUser(res.data))
    }
    fetchData()

  }, [])

  return (
    <div className="App">
      <Grid container style={{ padding: '24px' }}>
        {
          user.map(user => (
            <Grid xl={3} lg={4} sm={6} xs={12} md={3} style={{ marginTop: "20px" }}>
              <People email={user.email} avatar={user.avatar} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}

export default App;
