'use client';
import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { apiUrl } from '../Data'; 

export type Datakey = "Development" | "Business" 

export interface DataResponse {
    [key:string]: Course[];
}

export interface Course {
    id:          string
    title:       string
    description: string
    image:       Image
}


export interface Image {
    url: string;
    alt: string;
}


export interface AppContextProps {
    courseType: string;
    setCourseType: React.Dispatch<React.SetStateAction<string>>;
    data: DataResponse;
    setData: React.Dispatch<React.SetStateAction<DataResponse>>,
    handleDataChange:()=>void
}


const defaultContextValue: AppContextProps = {
    courseType: 'all',
    setCourseType: () => {},
    data: {
        Development: [],
        Business:    [],
        Design:      [],
        Lifestyle:   []
    },
    setData: () => {},
    handleDataChange:()=>{}
};

let data2={
    Development: [],
    Business:    [],
    Design:      [],
    Lifestyle:   []
}

const userContext = createContext<AppContextProps>(defaultContextValue);

const AppContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [courseType, setCourseType] = useState<string>('all');
    const [data, setData] = useState<DataResponse>(data2);

 
        const getData = async () => {
            try {
                const res = await axios.get(apiUrl);
                console.log(res);
                setData(res.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


    function handleDataChange(){
        getData();
    }

   

    const value: AppContextProps = {
        data,
        setData,
        courseType,
        setCourseType,
        handleDataChange
    };

    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
}

export default AppContext;
export { userContext };
