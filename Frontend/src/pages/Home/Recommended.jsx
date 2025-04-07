import React from "react";
import BookCard from "../Books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { useGetBooksQuery } from "../../store/feature/books/booksApi";


function Recommended() {
 const {data: books=[]} = useGetBooksQuery();
  return (
    <div className=" py-10">
      <h2 className=" text-3xl font-semibold mb-6">Recommended for you</h2>
     
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1180: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {books.length>0 && books.map((book) => {
            return (
              <SwiperSlide>
                <BookCard key={book._id} book={book} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Recommended;
