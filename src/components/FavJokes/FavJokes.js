import "./FavJokes.css";

function FavJokes({ jokes, setFavouriteJokes }) {
  const substringToRemove = "https://api.chucknorris.io/jokes/";

  const removeJokeFromFavs = (joke) => {
    const oldFavs = jokes.filter((j) => {
      return j.id !== joke.id;
    });
    setFavouriteJokes([...oldFavs]);
    let favJokesArrayString = JSON.stringify([...oldFavs]);
    localStorage.setItem("favJokes", favJokesArrayString);
  };

  
  let retrievedFavJokesArrayString = localStorage.getItem("favJokes");
  let retrievedArray = JSON.parse(retrievedFavJokesArrayString);

  
  return (
    <div className="jokes-wrapper">
      {retrievedArray.map((joke) => (
        <div key={joke.id} className="fav-jokes-ticket">
          <div
            className="joke-fav full-heart"
            onClick={() => removeJokeFromFavs(joke)}
          ></div>
          <div className="joke">
            <div className="joke-icon"></div>
            <div className="joke-content">
              <div className="joke-content_link">
                ID:
                <a
                  className="joke-content_link_id"
                  target="blanck"
                  href={`${joke.url}`}
                >
                  {joke.url.replace(substringToRemove, "")}
                </a>
              </div>
              <div className="joke-content_text">{joke.value}</div>
              <div className="joke-content_info">
                <span>
                  Last update:
                  <span>{joke.created}</span>
                  hours ago
                </span>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavJokes;
