import React from "react";
import { useSelector } from "react-redux";
import { Post } from './Post';
import PostWrapper from './styled-components/postWrapper';

const NewPost = () => {
    const newpost = useSelector(state => state.test);
    console.log(newpost);
    const NewItem = newpost.map((post) => 
        <PostWrapper key={post.id}>
            <Post key={post.id} post={post} excerpt />
        </PostWrapper>
        
    );

    return (
        <div>
            {NewItem.reverse()}
        </div>
        
    );
};

export default NewPost;