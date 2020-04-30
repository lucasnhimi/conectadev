import React from 'react';
import { Button } from '@material-ui/core';
import '../style.css';

function Header() {
  return (
    <header className="header">
      <div className="toolbar">
        <div>
          <a href="/">Conecta Dev - Alteração</a>
          <input type="text"></input>           
        </div>
        <div>
          <Button variant="contained" color="primary">
            Novo Post
          </Button>
          <span>img1</span>
          <span>img2</span>
        </div>
      </div>        
    </header>
  )
}

export default Header;