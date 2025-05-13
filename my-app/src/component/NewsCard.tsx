import moment from 'moment';
import React from 'react';

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

const NewsCard = (data: any) => {

  return (
    <>
      <div className="relative w-96 h-60 overflow-hidden rounded-xl shadow-lg group">
        {/* Background image */}
        <img
          src={data.urlToImage}
          alt="Card"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none" />

        {/* Text Container */}
        <div className="absolute bottom-8 left-4 right-4">
          {/* Default text (visible before hover) */}
          <p className="absolute text-white text-lg font-semibold transition-opacity duration-300 group-hover:opacity-0">
            Text A - Always visible
          </p>

          {/* Hover text (slides up on hover) */}
          <p className="absolute text-white text-lg font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Text B - On hover!
          </p>
        </div>
      </div>

      {/* <Card  className='w-100 rounded-2xl overflow-hidden relative'>
      <a href={data.url}  target="_blank" rel="noreferrer">
      <Card.Img variant="top" src={data.urlToImage} className='w-full h-60 transition-transform duration-300 ease-in-out rounded-2xl hover:scale-110' />
      <Card.Body className= "w-100 h-60 absolute bg-red">
      
        <Card.Title className='top-0 text-xl leading-none font-bold px-2'>{data.title}</Card.Title>
       
        <Card.Title className='text-sm leading-none font-medium pt-2 px-2'>by {data.author}</Card.Title>
        <Card.Title className='text-xs leading-none font-thin pt-1 px-2'>{moment(data.publishedAt).format("MMM Do, YYYY")}</Card.Title>
        <Card.Text className='text-sm leading-none font-medium pt-1 px-2'>{data.source.name}</Card.Text>

        <Card.Text className='text-base leading-5 px-2 py-2'>
          {data.description} 
          <a href={data.url} className='text-white font-semibold'>..See More</a>
        </Card.Text>
      </Card.Body>
      </a>
    </Card> */}

    </>
  );
};

export default NewsCard;
