import React from 'react';

const Story = ({ name, username }) => 
{
    return (
        <div>
            <h3 
                className='flex items-center justify-center text-xs bg-gray-200 text-red-600 w-16 h-16 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out'
            >
                {name}
            </h3>
            <p className='text-center text-xs w-14 truncate'>{username}</p>
        </div>
    )
}

export default Story
