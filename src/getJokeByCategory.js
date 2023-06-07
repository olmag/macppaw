import axios from "axios";

const getJokeByCategory = async (category) => {
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    const data = response.data

    const startDate = new Date(data.created_at); 
    const currentDate = new Date(); 

    const timeDiff = Math.abs(currentDate - startDate); 
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60)); 

    

    return {
        id: data.id,
        value: data.value,
        url: data.url,
        category: data.categories,
        created: hoursDiff,
        icon: data.icon_url,
    }
}

export default getJokeByCategory;