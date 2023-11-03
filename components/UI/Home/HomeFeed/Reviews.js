import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight, BiSolidStar } from 'react-icons/bi';
import Logo from '../../Images/Logo';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      text: 'Fellowship with women who are like me, most of them going through the same things I am going through. It is more of a productive get away each time.',
      author: 'NIKITA',
      role: 'Member',
      rating: 4.8,
    },
    {
      id: 2,
      text: 'I am now a free, flexible, and relaxed person who enjoys talking about anything and have learnt to trust people back, a step at a time.',
      author: 'BONGEKILE',
      role: 'Member',
      rating: 4.5,
    },
    {
        id: 3,
        text: 'Woman Up is a place filled with nothing but love, a great atmosphere for relaxing together. This is absolutely amazing, not everyone has that kind of space but WU has created one for me and I’m grateful',
        author: 'TEYISE',
        role: 'Member',
        rating: 4.9,
      },
      {
        id: 4,
        text: 'One session that is quite memorable to me was our self confidence and setting boundaries session, it made me stand strong and firm in setting my own boundaries and that it really is okay to be selfish sometimes. ',
        author: 'EMEFA',
        role: 'Member',
        rating: 4.5,
      },
      {
        id: 5,
        text: 'The most impactful moment since being with WU, I would say, was the very first conference where we got to share our experiences, the good and the bad, that’s when I knew WU was a Safe Space.',
        author: 'BAVUMILE',
        role: 'Member',
        rating: 4.9,
      },
      {
        id: 6,
        text: "I'd always enjoyed the conversations we had,even outside of us coming together.I have made friends and my friends have made friends in that sisterhood . It truly feels like a safe space to talk about anything and everything,good or bad",
        author: 'BONGUMUSA',
        role: 'Member',
        rating: 4.5,
      },
    // Add more reviews here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPreviousReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="flex flex-col items-center w-full space-y-14">
      <div>
        <p className="text-5xl tracking-tighter font-bold">REVIEWS</p>
      </div>
      <div className="w-10/12 flex items-center lg:flex-row flex-col-reverse">
        <div className="lg:w-5/12 w-10/12 max-h-64 bg-gray2 rounded-l-lg">
          {/* Pagination */}
          <div className="hidden lg:inline">
            <div className="bg-gray3 rounded-l-lg -space-y-4 py-6 text-2xl w-full flex flex-col items-center">
              <p>MEMBERS</p>
              <p>REVIEWS</p>
            </div>
          </div>
          <div className="flex items-center flex-col justify-center py-6 w-full">
            <div className="w-full flex justify-center flex-col items-center">
              <div className="w-8/12">
                <ul className="bg-gray3 border- grid grid-flow-row grid-cols-3 border-gray2 rounded-xl relative">
                  <li
                    className="py-2 cursor-pointer hover:bg-gray2 rounded-xl flex items-center justify-center"
                    onClick={goToPreviousReview}
                  >
                    <BiChevronLeft />
                  </li>
                  <li className="py-2 cursor-pointer bg-primary scale-110 text-white rounded-xl flex items-center justify-center">
                    <p>{currentIndex + 1}</p>
                  </li>
                  <li
                    className="py-2 cursor-pointer hover:bg-gray2 rounded-xl flex items-center justify-center"
                    onClick={goToNextReview}
                  >
                    <BiChevronRight />
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex space-y-4 items-center space-x-2">
                  <BiSolidStar />
                  <div className="-space-y-3">
                    <p>OVERALL</p>
                    <p>RATING</p>
                  </div>
                  <p className="font-bold text-primary text-2xl">{currentReview.rating}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* Current Review */}
          <div className="flex relative flex-col pt-16 pb-8 space-y-8 bg-conventional border-b-[116px] bg-opacity-50 rounded-lg border-[6px] border-primary w-full items-center">
            <div className="flex items-center flex-col space-y-6 w-full">
              <div className="flex flex-col items-center w-full">
                <div className="-space-y-2 w-full relative flex items-center justify-center">
                  <span className="absolute left-10 -top-10 flex justify-start opacity-20">
                    <p className="text-8xl">&quot;</p>
                  </span>
                  <p className="text-lg text-black text-center w-8/12">{currentReview.text}</p>
                </div>
              </div>
            </div>
            <div className="h-1.5 w-8 bg-primary opacity-20" />
            <span className="flex w-full absolute lg:space-x-16 lg:left-16 -bottom-20">
              <div>
                <Logo />
              </div>
              <div className="text-secondary flex-col flex items-center -space-y-2">
                <p className="lg:text-2xl">{currentReview.author}</p>
                <p>{currentReview.role}</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}