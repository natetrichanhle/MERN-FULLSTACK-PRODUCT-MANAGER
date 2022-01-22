import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton'

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProducts(res.data));
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return (
        <div>
            {products.map((product, index) => {
                return (
                    <p key={index}>
                        <Link to={'/product/' + product._id}>
                            {product.title}
                        </Link>
                        |
                        <Link to={'/product/' + product._id + '/edit'}>
                            Edit
                        </Link>
                        |
                        <DeleteButton
                            productId={product._id}
                            successCallback={() => removeFromDom(product._id)}
                        />
                    </p>
                )
            })}
        </div >
    )
}

export default ProductList;