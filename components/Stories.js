import React, { useEffect, useState } from 'react';
import faker from "faker";
import Story from './Story';
import { useSession } from 'next-auth/react';

const Stories = () => 
{
    const [suggestions, setSuggestions] = useState([]);
    const { data: session } = useSession();

    useEffect(() =>
    {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        setSuggestions(suggestions);
        console.log(suggestions);
    }, []);

    return (
        <div className='flex items-center space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            {session && (
                <Story img={session.user.image} username={session.user.username} alt="" />
            )}
            
            {suggestions.map((x) => 
            (
                <Story key={x.id} name={x.name} username={x.username} />
            ))}
        </div>
    )
}

export default Stories
