import "./App.css";
import Form from "./components/Form/Form";
import React, { useState } from "react";
import Jokes from "./components/Jokes/Jokes";
import FavJokes from "./components/FavJokes/FavJokes";

function App() {
  const [jokes, setJokes] = useState([]);
  const [favouriteJokes, setFavouriteJokes] = useState([]);
  const [isMobMenuActive, setIsMobMenuActive] = useState(false);
  
  const handleClick = () => {
    setIsMobMenuActive(!isMobMenuActive);
  };
  


  return (
    <div className="App">
      <div className="main">
        <h2>MSI 2020</h2>
        <div className="greeting">
          <h1 className="greeting__title">Hey!</h1>
          <p className="greeting__content">Let’s try to find a joke for you:</p>
        </div>
        <Form 
          setJokes={setJokes}
          jokes={jokes}
        />
        <Jokes
          jokes={jokes}
          setFavouriteJokes={setFavouriteJokes}
          favouriteJokes={favouriteJokes}
        />
      </div>
      <div className={isMobMenuActive ? 'menu active' : 'menu'}>
        <div className="menu__title">Favourite</div>
        <div>
          {favouriteJokes.length >= 1 ? (
            <FavJokes
              jokes={favouriteJokes}
              setFavouriteJokes={setFavouriteJokes}
            />
          ) : (
            <div className="nothing-in-fav">
              You have not chosen anything yet. Hurry up, Chuck Norris is VERY
              upset!
            </div>
          )}
        </div>
      </div>
      <div className="menu_icon" onClick={handleClick}>Favourite</div>
    </div>
  );
}

export default App;
