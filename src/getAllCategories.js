import axios from "axios";

const getAllCategories = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/categories')
    const data = response.data
    
    return data
}

export default getAllCategories;