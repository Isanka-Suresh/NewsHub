import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'
import { sample } from './data/SampleData';
import NewsCard from './component/NewsCard';
import Slider from './component/Slider';

function App() {

  const [articles, setArticles] = useState<article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, [])

  const fetchNews = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=cnn,bbc-news,the-verge&pageSize=24&page=1&apiKey=${process.env.REACT_APP_NEWSAPI}`
      );

      const data = response.data;
      console.log(data)
      if (Array.isArray(data.articles) && data.articles.length > 0) {
        setArticles(data.articles);
      } else {
        console.warn('Empty articles received. Falling back to sample data.');
        setArticles(sample);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
      console.warn('Falling back to sample data.');
      setArticles(sample);
    } finally {
      setLoading(false);
    }
  };

  interface article {
    source: {
      id: string | null;
      name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }

  if (loading) {
    return <div className='absolute bottom-1/2 left-1/2'>
      <Ring
        size="40"
        stroke="5"
        bgOpacity="0.1"
        speed="0.8"
        color="black"
      />
    </div>;
  }

  return (
    <div
      className="light relative">
      <div
        className='relative w-full h-16 flex bg-header'>
        <div
          className='pt-1 text-left font-bold text-5xl text-white'>
          News HUB
        </div>
      </div >
      <div
        className='bg-background flex flex-col justify-center'>
        <div
          className='flex justify-center'>
          <Slider article={articles.slice(0, 5)}/>
        </div>
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
