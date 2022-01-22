import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default (props) => {
    const {initialTitle, initialPrice, initialDescription , onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription)

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description})
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br />
                <input 
                type="text" 
                value={title} name = 'title' 
                onChange={(e) => {setTitle(e.target.value)}} 
                />
            </p>
            <p>
                <label>Price</label><br />
                <input 
                type="text" 
                value={price} name = 'price'
                onChange={(e) => {setPrice(e.target.value)}}
                />
            </p>
            <p>
                <label>Description</label><br />
                <input 
                type="text" 
                value={description} name = 'description'
                onChange={(e) => setDescription(e.target.value)} 
                />
            </p>
            <input type="submit" />
        </form>
    )
}