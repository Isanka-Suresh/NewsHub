import moment from 'moment';
import React from 'react';

 interface Article {
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
    </>
  );
};

export default NewsCard;
