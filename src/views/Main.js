import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import ProductList from '../components/ProductList';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product/new', product)
            .then(res => {
                setProducts([...products, res.data]);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Form
                onSubmitProp={createProduct}
                initialTitle=''
                initialPrice=''
                initialDescription=''
            />
            <hr />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}
