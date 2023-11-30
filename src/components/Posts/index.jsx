import React from 'react';

const Posts = ({posts, handleAddPost}) => {
    return (
        <>
            <button onClick={handleAddPost}>Add</button>
            <ul>
                {posts.map((posts) => {
                    return (
                        <li>
                            <h3>{posts.title}</h3>
                            <p>{posts.body}</p>
                        </li>
                    )

                })}
            </ul>

        </> 
    )
};

export default Posts;