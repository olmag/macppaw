import React, { useState, useEffect } from "react";
import "./Form.css";
import getRandomJoke from "../../getRandonJoke";
import getAllCategories from "../../getAllCategories";
import getJokeByCategory from "../../getJokeByCategory";
import getJokeByText from "../../getJokeByText";

function Form({ setJokes }) {
  const [selectedOption, setSelectedOption] = useState("Random");
  const [categories, setCategories] = useState([]);
  const [categoriesOption, setCategoriesOption] = useState("");
  const [text, setText] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCategoriesonChange = (event) => {
    setCategoriesOption(event.target.value);
  };

  const getJoke = async () => {
    const newJoke = await getRandomJoke();
    setJokes((prevJokes) => [newJoke, ...prevJokes]);
  };

  const getCat = async () => {
    const categories = await getAllCategories();
    setCategories(categories);
  };

  useEffect(() => {
    getCat();
  }, []);

  const getJokeByCat = async () => {
    if (!categoriesOption) {
      alert("Choose Category");
      return;
    }
    const jokeByCat = await getJokeByCategory(categoriesOption);
    setJokes((prevJokes) => [jokeByCat, ...prevJokes]);
  };

  const getJokeByTxt = async () => {
    if (!text) {
      alert("change text");
      return;
    }
    if (text.length >= 3 && text.length < 120) {
      const jokeByText = await getJokeByText(text);
      if (jokeByText === null) {
        alert("Nothing found");
        setText("");
        return;
      }
      setJokes((prevJokes) => [jokeByText, ...prevJokes]);
    } else {
      alert("change text");
      return;
    }
  };

  function getCategories() {
    return (
      <div className="options__categories">
        {categories.map((item) => (
          <label key={item} className="inputButton">
            <input
              type="radio"
              value={item}
              checked={categoriesOption === item}
              onChange={handleCategoriesonChange}
              className="radio__input"
            ></input>
            <span className="options__categories--text">{item}</span>
          </label>
        ))}
      </div>
    );
  }

  function getInput() {
    return (
      <div className="options__search">
        <input
          type="text"
          value={text}
          className="options__search--input"
          onChange={(e) => setText(e.target.value)}
          placeholder="Free text search..."
        ></input>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    switch (selectedOption) {
      case "Random":
        getJoke();
        break;
      case "From caterogies":
        getJokeByCat();
        break;
      case "Search":
        getJokeByTxt();
        break;
      default:
        console.log("Некорректный выбор");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="options">
      <div>
        <label className="options__radio">
          <input
            type="radio"
            value="Random"
            checked={selectedOption === "Random"}
            onChange={handleOptionChange}
            className="options__radio--icon"
          />
          Random
        </label>
      </div>
      <div>
        <label className="options__radio">
          <input
            type="radio"
            value="From caterogies"
            checked={selectedOption === "From caterogies"}
            onChange={handleOptionChange}
            className="options__radio--icon"
          />
          From caterogies
        </label>
        {selectedOption === "From caterogies" ? getCategories() : null}
      </div>
      <div>
        <label className="options__radio">
          <input
            type="radio"
            value="Search"
            checked={selectedOption === "Search"}
            onChange={handleOptionChange}
            className="options__radio--icon"
          />
          Search
        </label>
        {selectedOption === "Search" ? getInput() : null}
      </div>
      <button type="submit" className="options__button">
        Get a joke
      </button>
    </form>
  );
}

export default Form;
