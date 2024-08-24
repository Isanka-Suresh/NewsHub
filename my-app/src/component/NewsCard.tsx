import moment from 'moment';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

//  interface Article {
//     source: {
//       id: string | null;
//       name: string;
//     };
//     author: string;
//     title: string;
//     description: string;
//     url: string;
//     urlToImage: string;
//     publishedAt: string;
//     content: string;
//   }

  const NewsCard = (data: any ) => {

  return (
    <>
      <Card  className='w-80 rounded-2xl shadow-lg hover:shadow-xl border-2 bg-slate-700 border-cyan-800 hover:shadow-cyan-500/50 text-white '>
      <a href={data.url}  target="_blank" rel="noreferrer">
      <Card.Img variant="top" src={data.urlToImage} className='w-full h-40 rounded-t-2xl border-2' />
      <Card.Body>
      
        <Card.Title className='text-xl leading-none font-bold px-2'>{data.title}</Card.Title>
       
        <Card.Title className='text-sm leading-none font-medium pt-2 px-2'>by {data.author}</Card.Title>
        <Card.Title className='text-xs leading-none font-thin pt-1 px-2'>{moment(data.publishedAt).format("MMM Do, YYYY")}</Card.Title>
        <Card.Text className='text-sm leading-none font-medium pt-1 px-2'>{data.source.name}</Card.Text>

        <Card.Text className='text-base leading-5 px-2 py-2'>
          {data.description} 
          <a href={data.url} className='text-blue-500 font-semibold'>..See More</a>
        </Card.Text>
      </Card.Body>
      </a>
    </Card>
    
    </>
  );
};

export default NewsCard;
