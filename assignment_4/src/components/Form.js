import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actioncreators from '../actioncreators';

const Form = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    return (
        <form onSubmit={(event) => { 
            event.preventDefault();
            dispatch(actioncreators.addPost(title, body));
            dispatch(actioncreators.loadPost(title, body));
            setTitle("");
            setBody("");
            alert("Succesfully added post!")
            
            }
        }>
            <div className="formdiv">
                <input type="text" className="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title" size="70"/>
            </div>
            <div className="formdiv">
                <textarea id="body" className="textarea" onChange={(e) => setBody(e.target.value)} value={body} placeholder="Post Content" rows="6" cols="70"/>
            </div>
            <button type="submit" className="button">Submit!</button>
        </form>
    );
};

export default Form;