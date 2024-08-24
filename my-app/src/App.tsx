import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchNews().then((data) => setArticles(data))
  })

  async function fetchNews():Promise<Article[]> {
    const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-07-24&sortBy=publishedAt&apiKey=287e94250c0d40b5a4342f1e05e744c4');
    const data = await response.json();
    return data;
  }

  interface Article{
    source:object,
    author:string,
    title:string,
    description:string,
    url:string,
    urlToImage:string,
    publishedAt:string,
    content:string
  }

  return (
    <>
      {articles.map((article) => (
        <div key={article.author}></div>
      ))}
    </>
  );
}

export default App;
