import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "cec65753c8mshd83aa2a010f1068p18c8cejsn25b6090e0c61"
    // const apiKey = "f1513986ddbe4b668fe2ea286b8cb357";
  
    useEffect(() => {
      axios
        .get(
          'https://google-news.p.rapidapi.com/v1/top_headlines'
          // `https://newsapi.org/v2/everything?q=Apple&from=2021-11-06&sortBy=popularity&apiKey=${apiKey}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <NewsContext.Provider value={{ data }}>
        {props.children}
      </NewsContext.Provider>
    );
};