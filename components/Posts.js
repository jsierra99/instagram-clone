import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Post from './Post';
import { db, storage } from "../firebase";

const Posts = () => 
{
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        return onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), snapshot => {
            setPosts(snapshot.docs);
        });
    }, [db]);

    return (
        <div>
            {posts.map((x) => (
                <Post 
                    key={x.id} 
                    id={x.id}
                    username={x.data().username}
                    userImg={x.data().profileImg}
                    img={x.data().image}
                    caption={x.data().caption} 
                />
            ))}
        </div>
    )
}

export default Posts
