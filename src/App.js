import "./App.css";
import Form from "./components/Form/Form";
import React, { useState } from "react";
import Jokes from "./components/Jokes/Jokes";
import FavJokes from "./components/FavJokes/FavJokes";

function App() {
  const [jokes, setJokes] = useState([]);
  const [favouriteJokes, setFavouriteJokes] = useState([]);

  return (
    <div className="App">
      <div className="main">
        <h2>MSI 2020</h2>
        <div className="greeting">
          <h1 className="greeting__title">Hey!</h1>
          <p className="greeting__content">Let’s try to find a joke for you:</p>
        </div>
        <Form setJokes={setJokes} />
        <Jokes
          jokes={jokes}
          setFavouriteJokes={setFavouriteJokes}
          favouriteJokes={favouriteJokes}
        />
      </div>
      <div className="menu">
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
    </div>
  );
}

export default App;
