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
      <div className="relative w-100 h-100 overflow-hidden rounded-xl shadow-lg group">
        <a href={data.url} target="_blank" rel="noreferrer">
          <img
            src={data.urlToImage}
            alt="news image"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none" />
          <div className="absolute pl-2 pr-2 pb-2 bottom-4 text-white text-shadow-lg/30 text-lg font-semibold transition-opacity duration-300 group-hover:opacity-0">
            {data.title}
          </div>
          <div className="absolute pl-2 pr-2 pb-2 bottom-0 text-white text-shadow-lg/30 text-xs font-semibold transition-opacity duration-300 group-hover:opacity-0">
            {data.author} - {moment(data.publishedAt).format("MMM Do, YYYY")}
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-2 left-2 right-2">
              <div className="relative text-white opacity-0 text-md font-semibold translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {data.title}
              </div>
              <div className="relative text-white text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {data.description}
                <a href={data.url} className='text-xs text-white font-bold'>..See More</a>
              </div>
            </div>
          </div>
        </a >
      </div >

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
