import React from 'react';
//import './style.css';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import Feed from './components/Feed';
import NavBar from './components/NavBar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    height: '100vh',
    display: 'flex',
    width: '1200px',
    margin: '0 auto',
  }
})

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>      
      <Header />
      <div className="toolbar"></div>
      <main className={classes.main}>
        <NavBar />
        <Feed />        
      </main>
    </div>
  )
}

export default Home;