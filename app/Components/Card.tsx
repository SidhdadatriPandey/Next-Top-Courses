import React from 'react';
import { Course } from '../Context/AppContext';

interface CardProps {
  card: Course;
}

const Card: React.FC<CardProps> = ({card}) => {
  return (
    <div className='w-[22rem] rounded border-solid border-2 border-red-700 flex flex-col justify-center items-center p-4 gap-y-3'>
      {card.image && <img src={card.image.url} alt={card.image.alt} className='w-[21rem]'/>}
      <h3 className='text-yellow-700'>{card.title}</h3>
      <p className='h-32 overflow-hidden'>
        {card.description.length>100? card.description.substring(0,190)+"..." : card.description}
        </p>  
    </div>
  );
};

export default Card;
