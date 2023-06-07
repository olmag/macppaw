import axios from "axios";

const getJokeByText = async (text) => {
  const response = await axios.get(
    `https://api.chucknorris.io/jokes/search?query=${text}`
  );

  const data = response.data;
  if (!data.result.length) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * data.result.length);

  const dataResult = response.data.result[randomIndex];

  const startDate = new Date(dataResult.created_at);
  const currentDate = new Date();

  const timeDiff = Math.abs(currentDate - startDate);
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

  return {
    id: dataResult.id,
    value: dataResult.value,
    url: dataResult.url,
    category: dataResult.categories,
    created: hoursDiff,
    icon: dataResult.icon_url,
  };
};

export default getJokeByText;
