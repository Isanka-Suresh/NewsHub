import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/pagination";


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

interface NewsSliderProps {
  article: article[];
}

const Slider: React.FC<NewsSliderProps> = ({ article }) => {

  return (
    <div className="w-full py-8 px-4">
      <Swiper
        modules={[Pagination]}
        grabCursor
        initialSlide={2}
        centeredSlides
        slidesPerView="auto"
        speed={800}
        slideToClickedSlide
        pagination={{ clickable: true }}
        breakpoints={{
          320: { spaceBetween: 40 },
          650: { spaceBetween: 30 },
          1000: { spaceBetween: 20 },
        }}
        className="group"
      >
        {article.map((data) => (
          <SwiperSlide
            key={data.source.id || data.title}
            className="relative w-[300px] sm:w-[400px] md:w-[500px] overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105"
          >
            <img
              src={data.urlToImage}
              alt={data.title}
              className="w-full h-[560px] object-cover brightness-75 group-hover:brightness-50 transition duration-300"
            />

            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
              <h2 className="text-white text-lg font-semibold">
                {data.title}
              </h2>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 text-sm text-white">
                <p className="line-clamp-3">{data.description}</p>
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-medium text-blue-300 hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default Slider;