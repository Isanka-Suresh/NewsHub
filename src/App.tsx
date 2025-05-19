import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Ring2 } from 'ldrs/react'
import 'ldrs/react/Ring2.css'
import { sample } from './data/SampleData';
import NewsCard from './component/NewsCard';


// Default values shown

function App() {

  const [articles, setArticles] = useState<article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, [])

  const fetchNews = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=cnn,bbc-news,the-verge&pageSize=25&page=1&apiKey=0353eca61c1a40bea318234fbacab6b8');
      //&from=2024-08-23&to=2024-08-24&domains=engadget.com&pageSize=10&page=1
      const data = response.data;
      setArticles(data.articles);
      console.log(articles)
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false)
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

  if (loading) {
    return <div className='absolute bottom-1/2 left-1/2'>
      <Ring2
  size="40"
  stroke="5"
  strokeLength="0.25"
  bgOpacity="0.1"
  speed="0.8"
  color="black" 
/>
    </div>; // Replace with your loader component
  }

  return (
    <div
      className="light relative">
      <div
        className='relative w-full h-16 flex bg-header'>
        <img
          src="news logo.png"
          alt="logo"
          className='h-full' />
        <div
          className='pt-1 text-left font-bold text-5xl text-white'>
          News HUB
        </div>
      </div >
      <div
        className='bg-background flex justify-center'>
        <div
          className='m-2 grid gap-5 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
          {articles.map((data) => (
            <NewsCard
              key={data.source.name}{...data}
            />))}
        </div>
      </div>
    </div>
  );
}

export default App;
