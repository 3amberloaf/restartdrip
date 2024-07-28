import React, { useState } from 'react';
import './reviews.css';

const reviews = [
  {
    name: "Stan",
    time: "an hour ago",
    review: "Rylee was on time for my IV appointment yesterday and made the experience a pleasure. She did a no pain injection and the whole process was amazing. I would highly recommend...",
    rating: 5,
  },
  {
    name: "Esther",
    time: "16 hours ago",
    review: "Kelli was so great. Thank you!!! Feeling so much better.",
    rating: 5,
  },
  {
    name: "Alyse",
    time: "16 hours ago",
    review: "Thank you Kelli!!! Feeling better already!",
    rating: 5,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === reviews.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="reviews-container">
      <h2>Hear From Our Clients</h2>
      <div className="review">
        <div className="review-content">
          <h3>{reviews[currentIndex].name}</h3>

          <div className="rating">
            {Array(reviews[currentIndex].rating)
              .fill()
              .map((_, index) => (
                <span key={index}>&#9733;</span>
              ))}
          </div>
          <p>{reviews[currentIndex].review}</p>
        </div>
      </div>
      <button className="prev" onClick={handlePrevClick}>&#10094;</button>
      <button className="next" onClick={handleNextClick}>&#10095;</button>
      <button className="leave-review">Leave a review</button>
    </div>
  );
};

export default Reviews;
