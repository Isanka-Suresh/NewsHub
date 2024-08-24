import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { sample } from './data/SampleData';
import NewsCard from './component/NewsCard';;

function App() {

  //const [articles, setArticles] = useState<Article[]>([]);
  //const [persons, setPerson] = useState<person[]>([]);

  // useEffect(() => {
  //fetchNews().then((data) => setArticles(data))
  //   {articles.length > 0 ? (
  //   articles.map((article) =>
  //     (console.log(article.author)))
  // ):(
  //   console.log("nothing")
  // )};
  //})

  // interface person {
  //   id: number;
  //   title: string;
  // }


  // interface Article {
  //   source: {
  //     id: string | null;
  //     name: string;
  //   };
  //   author: string;
  //   title: string;
  //   description: string;
  //   url: string;
  //   urlToImage: string;
  //   publishedAt: string;
  //   content: string;
  // }

  // const fetchNews = async () => {
  //   try {
  //     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=287e94250c0d40b5a4342f1e05e744c4');
  //     //&from=2024-08-23&to=2024-08-24&domains=engadget.com&pageSize=10&page=1
  //     const data = response.data;
  //     console.log(response.status);
  //     return data;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <>
    <div 
    className='w-full h-16 bg-slate-800 text-center font-bold text-5xl text-white'>
      News HUB
      </div>
      <div className='flex justify-center'>
      <div className='grid lg:grid-cols-5 gap-10 mt-2 mr-4 sm:grid-cols-1 '>
      {sample.map((data) => (
        <NewsCard 
          key={data.source.name}{...data}
        />))};
        </div>
      </div>
      
    </>
  );
}

export default App;
