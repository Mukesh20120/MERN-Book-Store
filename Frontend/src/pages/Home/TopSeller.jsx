import React from "react";
import BookCard from "../Books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { useGetBooksQuery } from "../../store/feature/books/booksApi";

const selectOptions = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];
function TopSeller() {
  const [selectedOption, setSelectedOption] = React.useState("Choose a genre");

  const {data: books=[]} = useGetBooksQuery();
  console.log(books);
  const filteredBooks =
    selectedOption === "Choose a genre"
      ? books
      : books.filter((book) => book.category === selectedOption.toLowerCase());

  return (
    <div className=" py-10">
      <h2 className=" text-3xl font-semibold mb-6">Top Seller</h2>
      <div className=" flex item-center mb-8">
        <select
          name="category"
          id="category"
          onChange={(e) => setSelectedOption(e.target.value)}
          value={selectedOption}
          className=" border-2 border-gray-300 rounded-md px-4 py-2"
        >
          {selectOptions.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
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
          {filteredBooks.map((book) => {
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

export default TopSeller;
