'use client';
import React, { useContext, useEffect, useState } from 'react';
import { AppContextProps, Course, DataResponse, userContext } from '../Context/AppContext';
import Card from './Card';

const Cards: React.FC = () => {
    const { data, courseType, handleDataChange,setCourseType } = useContext<AppContextProps>(userContext);
    const [allCardsData, setAllCardsData] = useState<Course[]>([]);

    useEffect(()=>{
        setCourseType("All");
    },[]);

    useEffect(() => {
        // Fetch data if needed on component mount or when `courseType` changes
        handleDataChange();
    }, [courseType]);

    useEffect(() => {
        const collectCards = () => {
            let alldata: Course[] = [];

            if (courseType !== 'All') {
                const key = courseType as keyof DataResponse;
                alldata = data[key] || []; // Ensure we get an array even if `data[key]` is undefined
            } else {
                console.log(data);
                for (const key in data) {
                    const item = data[key];
                    alldata = alldata.concat(item);
                }
            }
            setAllCardsData(alldata);
        };

        collectCards();
    }, [data, courseType]);

    return (
        <div className='w-11/12 mt-4 p-6 flex flex-wrap justify-center gap-16 border-solid border-2 border-indigo-600'>
            {allCardsData.map((card:Course) => (
                <Card key={card.id} card={card}/>
            ))}
        </div>
    );
};

export default Cards;
