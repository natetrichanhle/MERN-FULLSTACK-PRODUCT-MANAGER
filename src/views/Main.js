import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products,setProducts] = useState([]);
    const[loaded,setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
    }, []);

    return (
        <div>
            <Form />
            <hr/>
            {loaded && <ProductList products={products} />}
        </div>
    )
}

export default Main;