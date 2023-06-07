import React from "react";
import './Jokes.css'

function Jokes({jokes}){
    const substringToRemove = 'https://api.chucknorris.io/jokes/';
    

    function showCategory(category) {
       return ( 
       <div className="joke-content_info_category">
            {category}
        </div>
       )
    } 

    return(
        <div className="jokes-wrapper">
            {jokes.map(joke =>(
                <div key={joke.id} className="jokes-ticket">
                    <div className="joke-fav"></div>
                    <div className="joke">
                        <div className="joke-icon"></div>
                        <div className="joke-content">
                            <div className="joke-content_link">
                                ID: 
                                <a className="joke-content_link_id" target="blanck" href={`${joke.url}`}>{joke.url.replace(substringToRemove, '')}</a>
                            </div>
                            <div className="joke-content_text">
                                {joke.value}
                            </div>
                            <div className="joke-content_info">
                                <span>
                                    Last update:
                                        <span>{joke.created}</span>
                                    hours ago
                                </span>
                                {joke.category.length >= 1 && showCategory(joke.category) }
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )    
  
}
  
export default Jokes;