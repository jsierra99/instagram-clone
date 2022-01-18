import React, { useEffect, useState } from 'react';
import faker from "faker";

const Suggestions = () => 
{
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() =>
    {
        const suggestions = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(), 
                id: i
            }
        ));

        setSuggestions(suggestions);
    }, []);

    return (
        <div className='mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
                <button className='text-gray-600 font-semibold'>See All</button>
            </div>

            {
                suggestions.map(x => (
                    <div key={x.id} className='flex items-center justify-between mt-3'>
                        <h3 className='flex items-center justify-center text-xs bg-gray-200 text-red-600 w-10 h-10 truncate rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out'>{x.name}</h3>
                    
                        <div className='flex-1 ml-4'>
                            <h2 className='font-semibold text-sm'>{x.username}</h2>
                            <h3 className='text-xs text-gray-400'>Works at {x.company.name}</h3>
                        </div>
                        <button className='text-blue-400 text-xs font-bold'>Follow</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Suggestions
