import './App.css';
import Form from './components/Form/Form';
import React, { useState } from "react";
import Jokes from './components/Jokes/Jokes';

function App() {
  const [jokes, setJokes] = useState([])
  const [favouriteJokes, setFavouriteJokes] = useState([])

  return (
    <div className="App">
      <div className='main'>
        <h2>MSI 2020</h2>
        <div className='greeting'>
          <h1 className='greeting__title'>Hey!</h1>
          <p className='greeting__content'>Let’s try to find a joke for you:</p>
        </div>
        <Form setJokes={setJokes}/>
        <Jokes jokes={jokes}/>
      </div>
      <div className='menu'>
        <div className='menu__title'>
          Favourite
        </div>
        <div>
          {favouriteJokes.length >= 1 ?  <Jokes jokes={favouriteJokes}/> : <div className='nothing-in-fav'>You have not chosen anything yet. Hurry up, Chuck Norris is VERY upset!</div>}
        </div>
      </div>
    </div>  
  );
}

export default App;
