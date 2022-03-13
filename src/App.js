
import Navbar from './component/navbar';
import Main from './main';
import React from 'react';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Main />
      </div>
    )
  }
}
