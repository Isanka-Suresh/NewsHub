import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { sample } from './data/SampleData';
import NewsCard from './component/NewsCard';

function App() {

  const [articles, setArticles] = useState<article[]>([]);
  //const [persons, setPerson] = useState<person[]>([]);

  useEffect(() => {
    fetchNews();
    
  },[])

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news,the-verge&apiKey=0353eca61c1a40bea318234fbacab6b8');
      //&from=2024-08-23&to=2024-08-24&domains=engadget.com&pageSize=10&page=1
      const data = response.data;
      setArticles(data.articles); 
      console.log(articles)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // interface person {
  //   id: number;
  //   title: string;
  // }


  interface article {
    source: {
      id: string | null;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }

  

  return (
    <>
    <div 
    className='w-full h-16 bg-gradient-to-r from-slate-600 to-blue-950 text-center font-bold text-5xl text-white'>
      News HUB
      </div >
      <div className='bg-gradient-to-r from-zinc-700 to-neutral-800 flex justify-center'>
        
      <div className='grid lg:grid-cols-5 gap-x-10 gap-y-5 mt-2 mr-4 sm:grid-cols-1 '>
      
      
      {articles.map((data) => (
        <NewsCard 
          key={data.source.name}{...data}
        />))}
        </div>
      </div>
      
    </>
  );
}

export default App;
