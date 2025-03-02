import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Reviewer1 from "../assets/Testemonial/testimonial_square_1.jpeg"
import Reviewer2 from "../assets/Testemonial/testimonial_square_2.jpeg"
import Reviewer3 from "../assets/Testemonial/testimonial_square_3.jpeg"
import Reviewer4 from "../assets/Testemonial/testimonial_square_4.jpeg"
import Reviewer5 from "../assets/Testemonial/testimonial_square_5.jpeg"
import Reviewer6 from "../assets/Testemonial/testimonial_square_6.jpeg"

const testimonialList = [
  {
    photo: Reviewer1,
    name: "Akshay Kumar",
    rating: 3.5,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    photo: Reviewer2,
    name: "Raima Sen",
    rating: 5,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    photo: Reviewer3,
    name: "Arjun Kapur",
    rating: 4.5,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    photo: Reviewer4,
    name: "Ritika Sharma",
    rating: 4,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    photo: Reviewer5,
    name: "Vikram Joshi",
    rating: 3,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    photo: Reviewer6,
    name: "Neha Gupta",
    rating: 4.8,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Rating = ({ rating }) => (
  <p className="flex gap-0.5 justify-center">
    {[...Array(5)].map((_, i) => {
      const index = i + 1;
      if (index <= Math.floor(rating)) return <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />;
      if (rating > i && rating < index + 1) return <FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-500" />;
      return <FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />;
    })}
  </p>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

const TestimonialItem = ({ item }) => {
  const { rating, content, photo, name } = item;
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
      <div className="flex flex-col items-center">
        <img src={photo} alt={name} className="rounded-full border" width="75" />
        <h5 className="text-lg font-medium mt-4">{name}</h5>
        <p className="text-center opacity-80">{content}</p>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

TestimonialItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

const Testimonial21 = () => {
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 1024 ? 1 : 3);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handleControl = (direction) => {
    setIndex((prev) =>
      direction === "prev"
        ? prev <= 0
          ? testimonialList.length - itemsToShow
          : prev - 1
        : prev >= testimonialList.length - itemsToShow
        ? 0
        : prev + 1
    );
  };

  return (
    <section className="py-14 md:py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container px-4 mx-auto relative">
        <h2 className="text-center text-3xl font-bold mb-6">What Clients Are Saying</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {testimonialList.slice(index, index + itemsToShow).map((item, i) => (
            <TestimonialItem key={i} item={item} />
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button onClick={() => handleControl("prev")} className="bg-gray-400 p-3 rounded-full hover:bg-gray-500">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button onClick={() => handleControl("next")} className="bg-gray-400 p-3 rounded-full hover:bg-gray-500">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial21;
