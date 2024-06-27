import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
import NavInshorts from './components/NavInshorts';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from './data/config';
function App() {
  const [category, setCategory] = useState("General") ;
  const [newsArray, setNewsArray] = useState([]) ;
  const [newsResults, setNewsResults] = useState() ;
  const newsApi = async () => {
    try{
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`);
        console.log(news);
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
    }catch(error){
        console.log(error);
    }

  }
  console.log(newsArray);
  useEffect(() => {
    newsApi();
  }, [newsResults, category]);
  return (
    <div className="App">
        <NavInshorts setCategory={setCategory}/>
        <NewsContent newsArray={newsArray} newsResults={newsResults}/>
    </div>
  );
}

export default App;
